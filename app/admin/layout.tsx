import styles from "./layout.module.css";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div className={styles.container}>{children}</div>;
};

export default layout;
