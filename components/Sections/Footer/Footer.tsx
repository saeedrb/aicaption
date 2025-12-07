import React from "react";
import styles from "./Footer.module.css";
import { Icon } from "@/components/Elements/Icon/Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutUs}>
        <h3>درباره ما</h3>
        <p>
          ما با استفاده از جدیدترین تکنولوژی‌های هوش مصنوعی، به شما کمک می‌کنیم
          تا محتوای با کیفیت و حرفه‌ای تولید کنید.
        </p>
      </div>
      <div className={styles.contactUs}>
        <h3>تماس با ما</h3>
        <div>
          <div>
            <Icon icon="mail" prefix="sarv" />
            <span>info@example.com</span>
          </div>
          <div>
            <Icon icon="phone" prefix="sarv" />
            <span>+98 912 345 6789</span>
          </div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <h3>شبکه‌های اجتماعی</h3>
        <div>
          <Link href="#" className={styles.instagram}>
            <Icon icon="instagram" prefix="sarv" />
          </Link>
          <Link href="#" className={styles.linkedin}>
            <Icon icon="linkedin" prefix="sarv" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
