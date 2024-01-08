import { Repositories } from "../../api/Repos";
import styles from "../../styles/ReposDetail.module.css";
import Typography from "../shared/Typography";

type ReposDetailProps = {
  repos: Repositories;
}

export const ReposDetailPage: React.FC<ReposDetailProps> = ({repos}) => {
  return (
    <>
      <div className={styles.repoInfo}>
        <div className={styles.repoDescription}>
          <Typography
            variant="p"
            color="primary"
            className={styles.repoSubtitle}
          >
            <a href={repos.html_url} target="_blank" rel="noreferrer">{repos.name}</a>
          </Typography>
          <Typography variant="p" color="primary" className={styles.repoText}>
            {repos.description}
          </Typography>
        </div>
      </div>
    </>
  );
};
export default ReposDetailPage;
