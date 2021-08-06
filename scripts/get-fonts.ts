import css from "css";
import axios from "axios";

const base = "https://fonts.googleapis.com/css2";
const source =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=optional";

async function getFonts() {
  const response = await axios.get(source);
  const data = await response.data;
  console.log(data);

  const ast = css.parse(data);
  const rules = ast.stylesheet.rules;
  console.log(ast);

  rules.forEach((rule: any) => {
    rule.declarations.forEach((declaration: any) => {
      if (declaration.property === "src") {
        console.log(declaration.value);
      }
    });
  });
}

getFonts();
