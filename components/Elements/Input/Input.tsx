"use client";
import React from "react";
import styles from "./Input.module.css";
import classNames from "classnames";

type InputProps = {
  title?: string;
  name?: string;
  id?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeHolder?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  wrapperClassName?: string;
  inputClassName?: string;
};

const Input: React.FC<InputProps> = ({
  title,
  name,
  id,
  type = "text",
  value,
  placeHolder = '',
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {},
  onBlur = (e: React.FocusEvent<HTMLInputElement>) => {},
  wrapperClassName = "",
  inputClassName = "",
}) => {
  return (
    <div className={classNames(styles.container, wrapperClassName)}>
      <label htmlFor={id}>{title}</label>
      <div className={classNames(styles.inputWrapper, inputClassName)}>
        <input
          type={type}
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
};

export default Input;
