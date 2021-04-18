import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getFiles = () => {
  try {
    const postPath = path.join(process.cwd(), "pages/posts");
    const files = fs.readdirSync(postPath);
    const postData = files.map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(process.cwd(), `pages/posts/${file}`);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        ...data,
        content,
        file,
        slug,
      };
    });
    return postData;
  } catch (err) {
    return err;
  }
};

export const getPostById = postId => {
  try {
    const postPath = path.join(process.cwd(), `pages/posts/${postId}`);
    const fileContents = fs.readFileSync(postPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      content
    };
  } catch (err) {
    return err;
  }
};

export default getFiles;
