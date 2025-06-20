import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Acerca de ProWebColombia</h2>
        <h1 className={styles.title}>
          Creamos ideas digitales que conectan, impactan y hacen crecer
          negocios.
        </h1>
        <p className={styles.desc}>
          En ProWebColombia, ayudamos a empresas colombianas a tener una
          presencia digital profesional, moderna y efectiva. Creamos páginas web
          visualmente atractivas, funcionales y adaptadas a cada necesidad, para
          que tu negocio no solo exista en internet, sino que se destaque.
          Sabemos que una buena página web es más que diseño: es estrategia,
          experiencia de usuario, velocidad, posicionamiento en Google y
          credibilidad.
        </p>
        <p className={styles.desc}>
          Aunque somos una agencia joven, contamos con el respaldo
          de un equipo con experiencia en desarrollo web, diseño UX/UI,
          automatización y posicionamiento digital. Nuestro enfoque es claro:
          ofrecer soluciones accesibles, rápidas y de alto impacto que generen
          resultados reales para nuestros clientes.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Proyectos En Desarrollo</p>
          </div>
          <div className={styles.box}>
            <h1>💬</h1>
            <p>Respaldo cercano y comunicación constante</p>
          </div>
          <div className={styles.box}>
            <h1>5 - 10 días</h1>
            <p>Entregas en tiempo récord</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
