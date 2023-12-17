import React from "react";
import clsx from "clsx";

import styles from "../../styles/Typography.module.css";

interface TypographyProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "h6";
    color?: "primary" | "secondary";
    className?: string;
    children?: React.ReactNode;
  }
  const Typography: React.FC<TypographyProps> = ({
    variant = "p",
    color = "primary",
    className,
    children,
  }) => {
    const Tag = variant;
  
    return (
      <Tag className={clsx(styles[variant],
       styles[color],
        className
        )}>
          {children}
      </Tag>
    );
  };
  
  export default Typography;
