import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contáctanos",
  description: "Comunícate con nosotros a través de WhatsApp o correo",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Imagen de contacto" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.contactInfo}>
          <h2>¿Necesitas un sitio web?</h2>
          <p>Ofrecemos servicios personalizados. Escríbenos por WhatsApp o correo y cuéntanos tu idea.</p>
          
          <div className={styles.contactItem}>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/573104939519?text=Hola%2C%20estoy%20interesado%20en%20una%20página%20web%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              +57 3104939519
            </a>
          </div>

          <div className={styles.contactItem}>
            <strong>Correo:</strong>{" "}
            <a href="mailto:prowebcol00@gmail.com" className={styles.link}>
              prowebcol00@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
