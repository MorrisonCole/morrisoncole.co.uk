import fs from "fs";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), "posts");

export const ALL_POST_PATHS = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
