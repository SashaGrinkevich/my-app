import { Repositories } from "../../api/Repos";
import styles from "../../styles/ReposDetail.module.css";
import Typography from "../shared/Typography";

interface ReposDetailProps {
  repo: Repositories;
}

export const ReposDetailPage: React.FC<ReposDetailProps> = ({ repo }) => {
  return (
    <>
      <div className={styles.repoInfo}>
        <Typography
          variant="p"
          color="primary"
          className={styles.repoTitle}
        >
          {`Repositories: ${repo.count}`}
        </Typography>
        <div className={styles.repoDescription}>
          <Typography
            variant="p"
            color="primary"
            className={styles.repoSubtitle}
          >
            {repo.full_name}
          </Typography>
          <Typography variant="p" color="primary" className={styles.repoText}>
            {repo.description}
          </Typography>
        </div>
      </div>
    </>
  );
};
export default ReposDetailPage;
