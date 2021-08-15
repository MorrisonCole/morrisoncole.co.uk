import css, { AtRule, Declaration, Rule, Stylesheet } from "css";
import axios, { AxiosResponse } from "axios";
import path from "path";
import fs from "fs";

interface Font {
  "font-family": string;
  "font-style": string;
  "font-weight": number;
  "font-display": string;
  "unicode-range": string;
  url: string;
  filename: string;
}

const source =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap";

function isRule(obj: unknown): obj is Rule {
  return (obj as Rule).declarations !== undefined;
}

async function getFonts() {
  const response: AxiosResponse<string> = await axios.get(source, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
    },
  });
  const data: string = response.data;

  const stylesheet: Stylesheet = css.parse(data);
  const rules: Array<Rule | Comment | AtRule> = stylesheet.stylesheet.rules;

  const urls: Font[] = rules
    .filter(
      (rule: Rule | Comment | AtRule) =>
        isRule(rule) && rule.type == "font-face"
    )
    .flatMap((rule: Rule) => {
      const font: Font = Object.fromEntries(
        rule.declarations.flatMap((declaration: Declaration) => {
          if (declaration.property === "src") {
            const url = /url\(([^)]+)\)/.exec(declaration.value)[1];
            const filename = url.substring(url.lastIndexOf("/") + 1);
            return [
              ["url", url],
              ["filename", filename],
            ];
          }

          return [[declaration.property, declaration.value]];
        })
      );

      return font;
    });

  await Promise.all(
    urls.map(async (font: Font) => {
      return downloadFont(font);
    })
  );

  const styles = urls.map(createStyles).join("");
  const filePath = path.join(__dirname, "generated.ts");
  fs.writeFileSync(
    filePath,
    `import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle\`
${styles}
\`
`
  );
}

async function downloadFont(font: Font) {
  const dir: string = path.join(__dirname, "fonts");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  } else {
    const files = fs.readdirSync(dir);
    files.forEach((file: string) => {
      fs.rmSync(path.join(dir, file));
    });
  }

  const file: string = path.join(dir, font.filename);
  const writer = fs.createWriteStream(file);

  const response = await axios.get(font.url, { responseType: "stream" });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

function createStyles(font: Font): string {
  return `  @font-face {
    font-family: ${font["font-family"]};
    font-style: ${font["font-style"]};
    font-weight: ${font["font-weight"]};
    font-display: ${font["font-display"]};
    src: local(''), url('/fonts/${font.filename}') format('woff2');
    unicode-range: ${font["unicode-range"]};
  }

`;
}

void getFonts();
