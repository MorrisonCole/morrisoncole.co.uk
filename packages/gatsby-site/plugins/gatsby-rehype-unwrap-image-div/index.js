const fs = require("fs");

const unified = require("unified");
const rehypeParse = require("rehype-parse");
const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const selectAll = require("hast-util-select").selectAll;
const visit = require("unist-util-visit");

const inlineNodeContents = (
  rootNode,
  { css = true, js = true, images = true, imports = true, svgElements = false }
) => {
  if (imports) {
    const htmlParser = unified().use(rehypeParse, {
      fragment: true,
    });
    const mdParser = unified().use(remarkParse).use(remarkRehype);
    visit(rootNode, (node, index, parent) => {
      if (node.tagName === "link" && node.properties.rel.includes("import")) {
        const fragmentString = fs.readFileSync(node.properties.href, {
          encoding: "utf-8",
        });
        let fragment;
        if (node.properties.type === "text/markdown") {
          // markdown import
          mdFragment = mdParser.parse(fragmentString);
          fragment = mdParser.runSync(mdFragment);
        } else {
          // html import
          fragment = htmlParser.parse(fragmentString);
        }
        parent.children.splice(index, 1, ...fragment.children);
      }
    });
  }
  if (css) {
    const linkElements = selectAll("link", rootNode);
    linkElements.forEach((element) => {
      if (element.properties.rel.includes("stylesheet")) {
        const stylesheetContent = fs.readFileSync(element.properties.href, {
          encoding: "utf-8",
        });
        element.tagName = "style";
        // remove previous props
        element.properties = {};
        element.children = [{ type: "text", value: stylesheetContent }];
      }
    });
  }
  if (js) {
    const scriptElements = selectAll("script", rootNode);
    scriptElements.forEach((element) => {
      const scriptLocation = element.properties.src;
      if (scriptLocation) {
        const scriptContent = fs.readFileSync(scriptLocation, {
          encoding: "utf-8",
        });
        element.properties = {};
        element.children = [{ type: "text", value: scriptContent }];
      }
    });
  }
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

/**
 * Transformer for unified.js / rehype that inlines assets like css, js and images
 *
 * Text files are expected to be utf-8 encoded
 *
 * @param {Object} options
 * @param {boolean} options.css - inline CSS stylesheets
 * @param {boolean} options.js - inline JS scripts
 * @param {boolean} options.images - inline images like png, jpg or svg
 * @param {boolean} options.svgElements - inline svgs as <svg> elements instead of <img> elements
 * @returns {Object} unified transformer
 */
const inline = ({
  css = true,
  js = true,
  images = true,
  imports = true,
  svgElements = false,
} = {}) => {
  return (rootNode) =>
    inlineNodeContents(rootNode, {
      css,
      js,
      images,
      imports,
      svgElements,
    });
};

module.exports = inline;
