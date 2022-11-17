const fs = require("fs");

const unified = require("unified");
const rehypeParse = require("rehype-parse");
const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const selectAll = require("hast-util-select").selectAll;
const visit = require("unist-util-visit");

const inlineNodeContents = (rootNode) => {
  console.error(rootNode);
  if (images) {
    const imgElements = selectAll("img", rootNode);
    imgElements.forEach((image) => {
      const imgPath = image.properties.src;
      if (imgPath.startsWith("data:")) {
        // ignore image that's already inlined
        return;
      }
      const fileExt = imgPath.match("\\.([a-zA-Z]+)$")[1];
      if (fileExt === undefined || fileExt === null) {
        throw new Error("image path without file extension");
      }
      if (fileExt === "svg" && svgElements) {
        const svgContent = fs.readFileSync(image.properties.src, {
          encoding: "utf-8",
        });
        const svgParser = unified().use(rehypeParse, {
          fragment: true,
          space: "svg",
        });
        const svgDoc = svgParser.parse(svgContent);
        for (let childNode of svgDoc.children) {
          if (childNode.type === "element") {
            svgNode = childNode;
            break;
          }
        }
        image.tagName = "svg";
        image.properties = svgNode.properties;
        image.children = svgNode.children;
      } else if (fileExt === "svg") {
        const imgContent = fs.readFileSync(image.properties.src, "base64");
        image.properties.src = `data:image/svg+xml;base64,${imgContent}`;
      } else {
        const imgContent = fs.readFileSync(image.properties.src, "base64");
        image.properties.src = `data:image/${fileExt};base64,${imgContent}`;
      }
    });
  }
  return rootNode;
};

const inline = () => {
  return (rootNode) =>
    inlineNodeContents(rootNode);
};

module.exports = inline;
