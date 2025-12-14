import React from 'react'
import styles from './Button.module.css';
import classNames from 'classnames';

type ButtonProps = {
    title: string,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string
}

const Button: React.FC<ButtonProps> = ({
    title,
    type = 'button',
    onClick = (e: React.MouseEvent<HTMLButtonElement>) => {},
    className
}) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick} type={type}>{title}</button>
  )
}

export default Button