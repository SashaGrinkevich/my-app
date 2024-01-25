import React from "react";
import { useAppSelector } from "../store";
import { getUserSlice } from "../store/user.selectors";
import ReposDetail from "./ReposDetail/ReposDetail";
import styles from "../styles/ReposDetail.module.css";
import Button from "./shared/Button";


const Pagination: React.FC = () => {
  const { repos } = useAppSelector(getUserSlice);
  const perPage = 4;
  const pageCount = Math.ceil(repos.length / perPage);
  const [currentPage, setCurrentPage] = React.useState(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * perPage;
  const reposPerPage = repos.slice(startIndex, startIndex + perPage);
  return (
    <div className={styles.repo}>
      <ul className={styles.repoInfo}>
        {reposPerPage.map((repo) => (
          <li key={repo.name}>
            <ReposDetail repos={repo} />
          </li>
        ))}
      </ul>
      <div className={styles.pagination}>
        {Array.from({ length: pageCount }).map((_, index) => (
          <Button
            className={styles.paginateBtn}
            color="secondary"
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
