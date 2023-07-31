import Layout from "@/component/layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps{
  dataBlog: Post[]
}

const BlogPage = (props : BlogProps) => {
  const { dataBlog } = props;
  return (
    <>
      <Layout pageTitle="Blog" >
        <h1 className={styles["title-homepage"]}>Blog</h1>
        {dataBlog.map(blog => {
          return(
            <div key={blog.id} className={styles.card}>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
            </div>
          )
        })}
        {/* {dataBlog.map((blog) => {
          return (
            <div>
              <p>{blog.title}</p>
              <p>{blog.body}</p>
            </div>
          );
        })} */}
      </Layout>
    </>
  );
};
export default BlogPage;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
