import React, { useEffect } from "react";
import Typography from "../shared/Typography";
import { getUser } from "../../api/getUser";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../../store/user.selectors";
import { setIsUserPageLoading, setUser } from "../../store/user.reducer";

import styles from "../../styles/UserPageDetail.module.css";
import { AppDispatch } from "../../store";
import { getUserThunk } from "../../store/user.actions";

const UserPageDetail: React.FC = () => {
  const { name: userId } = useParams();
  const { user, isUserPageLoading: loading } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!userId) return;
    dispatch(getUserThunk(userId));

    getUser({ name: userId })
      .then((data) => {
        dispatch(setUser(data));
      })
      .finally(() => {
        dispatch(setIsUserPageLoading(false));
      });
  }, [dispatch, userId]);

  return (
    <div>
      {loading && "Loading"}

      {user && (
      <>
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
                {user.followers_url}
              </Typography>
              <Typography
                variant="p"
                color="primary"
                className={styles.following}
              >
                {user.following_url}
              </Typography>
            </div>
          </div>
          <div className={styles.repoInfo}>
            <Typography
              variant="p"
              color="primary"
              className={styles.repoTitle}
            ></Typography>
            <div className={styles.repoDescription}>
              <Typography
                variant="p"
                color="primary"
                className={styles.repoSubtitle}
              ></Typography>

              <Typography
                variant="p"
                color="primary"
                className={styles.repoText}
              ></Typography>
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default UserPageDetail;
