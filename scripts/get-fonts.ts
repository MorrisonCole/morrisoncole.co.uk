import css, { AtRule, Declaration, Rule, Stylesheet } from "css";
import axios, { AxiosResponse } from "axios";
import path from "path";
import fs from "fs";
import { debug } from "console";

const base = "https://fonts.googleapis.com/css2";
const source =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=optional";

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

  const urls: string[] = rules
    .filter((rule: Rule | Comment | AtRule) => isRule(rule))
    .flatMap((rule: Rule) => {
      return rule.declarations
        .filter((declaration: Declaration) => declaration.property === "src")
        .flatMap((declaration: Declaration) => {
          return /url\(([^)]+)\)/.exec(declaration.value)[1];
        });
    });

  await Promise.all(urls.map(async (url: string) => downloadFont(url)));
}

async function downloadFont(url: string) {
  const dir: string = path.join(__dirname, "fonts");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  } else {
    const files = fs.readdirSync(dir);
    files.forEach((file: string) => {
      fs.rmSync(path.join(dir, file));
    });
  }

  const file: string = path.join(dir, url.substring(url.lastIndexOf("/")));
  const writer = fs.createWriteStream(file);

  const response = await axios.get(url, { responseType: "stream" });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

void getFonts();
