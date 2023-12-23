import React, { useState } from "react";
import styles from "../../styles/SearchInput.module.css";
import Button from "./Button";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { getUserThunk } from "../../store/user.actions";

const SearchInput: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    dispatch(getUserThunk(searchValue));
  };

  return (
    <div className={styles.search}>
      <input type="text" 
      placeholder="Enter GitHub username"
       className={styles.inputSearch} 
       onChange={handleChange}/>
       <Button
      type="submit"
      color="primary"
      variant = "standard"
      className={styles.searchButton}
      onClick={handleClick}
       >search
      </Button>
    </div>
  );
};
export default SearchInput;


