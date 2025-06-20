import Link from "next/link";
import Links from "./links/links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoWrapper}>
          <span className={styles.logoText}>ProWebColombia</span>
          <Image
            src="/colombia.png"
            alt="Bandera de Colombia"
            width={16}
            height={12}
            className={styles.flag}
          />
        </div>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
