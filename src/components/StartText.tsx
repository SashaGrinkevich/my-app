import Icon from "../assets/Icon";
import styles from "../styles/StartText.module.css";
import Typography from "./shared/Typography";

const StartText: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Icon type={"search"} className={styles.logoImg} />
      <Typography className={styles.text}>
        Start with searching a GitHub user
      </Typography>
    </div>
  );
};
export default StartText;
