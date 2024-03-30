import PostsCount from "@/components/posts-count/posts-count";
import styles from "./page.module.css";
import Posts from "@/components/posts/posts";

export default function Home() {
  return (
    <main className={styles.main}>
      <PostsCount />
      <Posts />
    </main>
  );
}
