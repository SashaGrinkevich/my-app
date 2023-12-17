import React from "react";
import clsx from "clsx";

import styles from "../../styles/Button.module.css";



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary"  | "secondary";
  variant?: "standard" | "icon";
  children?: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' ;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color = "primary" ,
  variant = "standard",
  className,
  type,
}) => {
  return (
    <button
    className={clsx(styles.button, styles[color], styles[variant], className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
