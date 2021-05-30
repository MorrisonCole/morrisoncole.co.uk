const axios = require("axios");
var xml2js = require("xml2js");

const key = process.env.GOODREADS_KEY;

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const { data } = await axios.get(
    `https://www.goodreads.com/review/list/6320986?key=${key}&v=2&shelf=2021`
  );

  const parser = new xml2js.Parser({ ignoreAttrs: true });
  const parsed = await parser.parseStringPromise(data);

  return;
};
