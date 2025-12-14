"use client";
import React, { useState } from "react";
import styles from "./Auth.module.css";
import Input from "@/components/Elements/Input/Input";
import Button from "@/components/Elements/Button/Button";
import Link from "next/link";
const Auth: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.aside}></div>
      <div className={styles.form}>
        <div className={styles.formWrapper}>
          <h1>خوش آمدید</h1>
          <span>نام کاربری و رمز عبور خود را وارد کنید</span>
          <Input
            name="username"
            id="username"
            value={username}
            title="نام کاربری:"
            placeHolder="ایمیل/ نام کاربری"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            wrapperClassName={styles.inputWrapper}
          />
          <Input
            name="password"
            id="password"
            type="password"
            value={password}
            title="رمز عبور"
            placeHolder="****************"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            wrapperClassName={styles.inputWrapper}
          />
          <Button title="ورود" />

          <div className={styles.link}>
            <Link href="/">
              <span>فراموشی رمز</span>
            </Link>
            <Link href="/">
              <span>ثبت نام</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
