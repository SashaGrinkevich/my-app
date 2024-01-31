import React, { useState } from "react";
import {  useAppSelector } from "../store";
import { getUserSlice } from "../store/user.selectors";
import ReposDetail from "./ReposDetail/ReposDetail";
import styles from "../styles/Pogination.module.css";
import Button from "./shared/Button";
import Typography from "./shared/Typography";
import Icon from "../assets/Icon";

const Pagination: React.FC = () => {
  const { repos } = useAppSelector(getUserSlice);
  const perPage = 4;
  const pageCount = Math.ceil(repos.length / perPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage - 1 < (currentPage - 1) * currentPage + 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > currentPage * pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * perPage;
  const reposPerPage = repos.slice(startIndex, startIndex + perPage);
  return (
    <div className={styles.repo}>
      <Typography variant="h2" className={styles.allReposCount}>
        Repositories - "{repos.length}"
      </Typography>
      <ul className={styles.repoInfo}>
        {reposPerPage.map((repo) => (
          <li key={repo.name}>
            <ReposDetail repos={repo} />
          </li>
        ))}
      </ul>
      <div className={styles.pagination}>
        {currentPage > 1 && (
          <Button className={styles.btnPrev} onClick={handlePrevBtn}>
            <Icon type={"left"}  className={styles.arrow}/>
          </Button>
        )}
        {Array.from({ length: pageCount }).map((_, pages) => (
          <Button
            className={styles.paginateBtn}
            key={pages + 1}
            onClick={() => handlePageChange(pages + 1)}
            disabled={currentPage === pages + 1}
            style={{ backgroundColor: pages === currentPage ? "red" : "white" }}
          >
            {pages + 1}
          </Button>
        ))}
        {currentPage < pageCount && (
          <Button className={styles.btnNext} onClick={handleNextBtn}>
            <Icon type={"right"}  className={styles.arrow}/>
          </Button>
        )}
      </div>
    </div>
  );
};
export default Pagination;
