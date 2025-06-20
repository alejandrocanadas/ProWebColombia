import Image from "next/image";
import styles from "./singleProject.module.css";
import { getProjects } from "@/app/lib/projects";

const getData = async (slug) => {
  const projects = await getProjects();
  return projects.find((p) => p.id === slug);
};

const ProjectPage = async ({ params }) => {
  const { slug } = params;
  const project = await getData(slug);

  if (!project) {
    return <div className={styles.notFound}>Proyecto no encontrado.</div>;
  }

  return (
    <div className={styles.container}>
      {(project.video || project.img) && (
        <div className={styles.imgContainer}>
          {project.video ? (
            <video
              className={styles.img}
              autoPlay
              muted
              loop
              controls
              playsInline
            >
              <source src={project.video} type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          ) : (
            <Image
              src={project.img}
              alt={project.title}
              fill
              className={styles.img}
            />
          )}
        </div>
      )}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.date}>{new Date(project.createdAt).toDateString()}</p>
        <p className={styles.content}>{project.desc}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
