import getFiles, { getPostById } from "../../Lib/posts";
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';


const Article = ({ postContent }) => {
    const content = hydrate(postContent)
    return(
    <article>
        {content}
    </article>
    )
    };

export async function getStaticProps({ params }) {
  const id = params.slug + '.mdx'
  const fileData = await getPostById(id);
  const htmlContent = await renderToString(fileData.content)
  return {
    props: {
      postContent: htmlContent,
    },
  };
}

export async function getStaticPaths() {
  const docs = await getFiles();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default Article;
