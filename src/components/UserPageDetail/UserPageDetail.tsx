import Typography from "../shared/Typography";
import { getSlice } from "../../store/user.selectors";
import styles from "../../styles/UserPageDetail.module.css";
import { useAppSelector } from "../../hooks/useAppSelector";
import ReposDetail from "../ReposDetail/ReposDetail";
import AllRepos from "../ReposDetail/AllRepos";

const UserPageDetail: React.FC = () => {
  const { user, repos, isUserPageLoading: loading } = useAppSelector(getSlice);
  return (
    <div>
      {loading && "Loading"}
      {user && (
        <div className={styles.pageWrapper}>
          <div className={styles.userInfo}>
            <img src={user.avatar_url} alt="avatar" />
            <Typography variant="p" color="primary" className={styles.name}>
              {user.id}
            </Typography>
            <Typography variant="p" color="primary" className={styles.nickName}>
              {user.login}
            </Typography>
            <div className={styles.followInfo}>
              <Typography
                variant="p"
                color="primary"
                className={styles.followers}
              >
                {user.followers}
              </Typography>
              <Typography
                variant="p"
                color="primary"
                className={styles.following}
              >
                {user.following}
              </Typography>
            </div>
            <div className={styles.repoInfo}>
            <AllRepos repos={repos} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPageDetail;
