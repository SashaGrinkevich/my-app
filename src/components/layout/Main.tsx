import React, { useEffect } from "react";
import styles from "../../styles/Main.module.css";
import Typography from "../shared/Typography";
import Icon from "../../assets/Icon";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../../store/user.selectors";
import { AppDispatch } from "../../store";
import { getSearchUsersThunk, getUsersThunk } from "../../store/user.actions";
import UserPageDetail from "../UserPageDetail/UserPageDetail";

const Main: React.FC = () => {
  const {
    isSearchUsersLoading: searchLoading,
    search,
    searchUsers,
    page,
    total
  } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (search.length > 0) {
      dispatch(getSearchUsersThunk());
    } else {
      dispatch(getUsersThunk());
    }
  }, [dispatch, search, page]);

  return (
    <div>
      {search === "" && (
        <div className={styles.wrapper}>
          <Icon type={"search"} className={styles.logoImg} />
          <Typography variant="p" color="primary" className={styles.text}>
            Start with searching a GitHub user
          </Typography>
        </div>
      )}
      {
        <div>
          {search !== "" && (
            <div>
              {searchLoading && "Loading"}
              {!searchLoading && searchUsers.length > 0 && (
                <>
                  <div>
                  <Typography variant="span" color="secondary">
                      {`found ${total} users`}
                    </Typography>
                  </div>
                  <UserPageDetail/>
                </>
               )} 
            </div>
          )}
        </div>
      }
    </div>
  );
};
export default Main;
