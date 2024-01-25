import React, { useState } from "react";
import styles from "../../styles/SearchInput.module.css";
import Button from "./Button";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { getReposThunk, getUserThunk } from "../../api/getUsersInfo";
import Icon from "../../assets/Icon";

const SearchInput: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(getUserThunk(searchValue));
    dispatch(getReposThunk(searchValue));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        className={styles.inputSearch}
        onChange={handleChange}
      />
      <Button
        className={styles.searchButton}
        onClick={handleClick}
      >
       <Icon type={"search"} className={styles.searchIcon} />
      </Button>
    </div>
  );
};
export default SearchInput;
