import UserPageDetail from "../UserPageDetail/UserPageDetail";
import StartText from "../StartText";
import { getUserSlice } from "../../store/user.selectors";
import { useSelector } from "react-redux";

const Main: React.FC = () => {
  const {  repos } = useSelector(getUserSlice);

  return <>{repos.length === 0 ? (<StartText />) : (<UserPageDetail />)}</>;
};
export default Main;
