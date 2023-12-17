import React from "react";
import styles from '../../styles/Layout.module.css'

interface MainLayotProps {
    header: React.ReactNode;
    main: React.ReactNode;
    footer:React.ReactNode;
}

const MainLayot: React.FC <MainLayotProps> = ({header,main,footer}) => {
    return (
        <section className={styles.app}>
        <header className={styles.header}>{header}</header>
        <div className={styles.wrapper}>
          <main className={styles.main}>{main}</main>
          <footer className={styles.footer}>{footer}</footer>
        </div>
      </section>  
    )
}

export default MainLayot;