import fs from "fs";
import path from "path";
import { BLOG_POSTS } from "../lib/constants/blogs";

const dir = path.join(__dirname, "../lib/constants/posts");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

BLOG_POSTS.forEach((post) => {
  const filePath = path.join(dir, `${post.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2), "utf8");
  console.log(`Wrote ${filePath}`);
});
