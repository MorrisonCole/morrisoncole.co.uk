import css, { AtRule, Declaration, Rule, Stylesheet } from "css";
import axios, { AxiosResponse } from "axios";

const base = "https://fonts.googleapis.com/css2";
const source =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=optional";

function isRule(obj: any): obj is Rule {
  return obj.declarations !== undefined;
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
  console.log(rules);

  rules.forEach((rule: Rule | Comment | AtRule) => {
    if (isRule(rule)) {
      rule.declarations
        .filter((declaration: Declaration) => declaration.property === "src")
        .forEach((declaration: Declaration) => {
          console.log(declaration.value);
        });
    }
  });
}

void getFonts();
