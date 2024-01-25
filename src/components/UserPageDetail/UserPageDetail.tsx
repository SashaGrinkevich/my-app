import Typography from "../shared/Typography";
import styles from "../../styles/UserPageDetail.module.css";
import { useAppSelector } from "../../hooks/useAppSelector";
import Icon from "../../assets/Icon";
import { getUserSlice } from "../../store/user.selectors";
import ReposDetail from "../ReposDetail/ReposDetail";
import { useState } from "react";
import Button from "../shared/Button";
import Pagination from "../Pogination";

const UserPageDetail: React.FC = () => {
  const {
    user,
    isUserPageLoading: loading,
    repos,
  } = useAppSelector(getUserSlice);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(repos.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {setCurrentPage(page)};
  const startIndex = (currentPage - 1) * itemsPerPage;
  const repo = repos.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {loading && "Loading"}
      {user && (
        <div className={styles.pageWrapper}>
          <div className={styles.userInfo}>
            <img src={user.avatar_url} alt="avatar" className={styles.avatar} />
            <Typography variant="p" color="primary" className={styles.name}>
              {user.name}
            </Typography>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <Typography
                variant="p"
                color="secondary"
                className={styles.nickName}
              >
                {user.login}
              </Typography>
            </a>
            <div className={styles.followInfo}>
              <Typography
                variant="p"
                color="primary"
                className={styles.followers}
              >
                <Icon type={"followers"} className={styles.icon} />
                {user.followers} followers
              </Typography>
              <Typography
                variant="p"
                color="primary"
                className={styles.following}
              >
                <Icon type={"following"} className={styles.icon} />
                {user.following} following
              </Typography>
            </div>
          </div>
          <div>
            <Pagination/>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPageDetail;
