import styles from "../../styles/Main.module.css";
import UserPageDetail from "../UserPageDetail/UserPageDetail";

const Main: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <UserPageDetail />
      </div>
    </>
  );
};
export default Main;
