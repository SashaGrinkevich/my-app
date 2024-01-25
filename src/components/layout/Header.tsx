import React from "react";
import SearchInput from "../shared/SearchInput";
import Icon from "../../assets/Icon";
import { NavLink } from "react-router-dom";
import styles from "../../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <Icon type={"github"} className={styles.logo} />
      </NavLink>
      <div className={styles.input}>
        <SearchInput />
      </div>
    </div>
  );
};
export default Header;
