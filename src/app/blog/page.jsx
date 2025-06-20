import PostCard from "@/app/components/postCard/postCard";
import styles from "./blog.module.css";
import { getProjects } from "@/app/lib/projects"; 

const BlogPage = async () => {
  const posts = await getProjects(); // <-- datos locales

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
