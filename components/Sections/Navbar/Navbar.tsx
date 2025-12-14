import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={"./logo.png"} alt="Logo" className={styles.logoImage} />
        <span className={styles.logoText}>خوشنویس</span>
      </div>
      <div className={styles.login}>
        <Link href="/admin/auth" className={styles.loginLink}>
          <span> ورود / ثبت نام</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
