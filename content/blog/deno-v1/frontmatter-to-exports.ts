import { parseAll } from "https://deno.land/std@0.51.0/encoding/yaml.ts";

let mdxDirectory = "./";

console.log(`Reading from directory: ${mdxDirectory}`);

for await (const file of Deno.readDir(mdxDirectory)) {
  if (!file.name.endsWith("mdx")) continue;
  console.log(`\n\nConverting '${file.name}':`);

  let content = await Deno.readTextFile("./example.mdx");

  let yaml = parseAll(content) as object[];
  const output = `export const meta = ${JSON.stringify(yaml[0], null, 2)}`;
  console.log(output);
}
