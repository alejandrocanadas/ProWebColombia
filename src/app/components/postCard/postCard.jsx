import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.video ? (
          <div className={styles.imgContainer}>
            <video
              className={styles.img}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={post.video} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        ) : post.img ? (
          <div className={styles.imgContainer}>
            <Image
              src={post.img}
              alt={post.title}
              fill
              className={styles.img}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        ) : null}

        <span className={styles.date}>
          {new Date(post.createdAt).toDateString().slice(4, 15)}
        </span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
      </div>
    </div>
  );
};

export default PostCard;
