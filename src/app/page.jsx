import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Agencia digital creativa y enfocada en resultados
        </h1>
        <p className={styles.desc}>
          En ProWebColombia diseñamos páginas web modernas, rápidas y
          personalizadas para que tu negocio destaque, conecte con más clientes
          y crezca online. Creamos soluciones digitales a la medida: desde
          landing pages efectivas hasta sitios web completos y funcionales.
        </p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.button}>
            Sobre Nosotros
          </Link>
          <Link href="/contact" className={styles.button}>
            Contacto
          </Link>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="marcas"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="gif" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default HomePage;
