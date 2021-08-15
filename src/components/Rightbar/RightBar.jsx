import "./rightbar.css";
import { useContext, useEffect, useMemo } from "react";
import OnlineUser from "components/OnlineUser";
import StateContext from "context/StateContext";

const RightBar = () => {
  const { users } = useContext(StateContext);
  useEffect(() => {}, [users]);
  const onlineUser = useMemo(() => {
    return users.filter((item) => item.isOnline);
  }, [users]);
  const renderOnlineUser = useMemo(() => {
    return onlineUser.map((user) => (
      <OnlineUser
        key={user.id}
        imgSrc={user.profileImage}
        imgAlt={user.name}
        name={user.name}
      />
    ));
  }, [onlineUser]);

  return (
    <div className="rightbar">
      <div className="rightbar__brithday_container">
        <div className="rightbar__brithday_img">
          <img src="assets/images/gift.png" alt="brithday" />
        </div>
        <div className="rightbar__brithday_content">
          <p>
            <strong>Jack Dony </strong>and <strong>2 other frinds </strong>have
            a brithday today.
          </p>
        </div>
      </div>
      <div className="rightbar__adversing">
        <img src="assets/images/adv.jpg" alt="adversing" />
      </div>
      <div className="rightbar__online">
        <h3>online friends</h3>
        <div className="rightbar__online_users">{renderOnlineUser}</div>
      </div>
    </div>
  );
};

export default RightBar;
