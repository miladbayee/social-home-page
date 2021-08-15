import "./sidebar.css";
import { useContext, useEffect, useMemo } from "react";
import SidebarListItems from "components/SidebarListItems";
import BaseButton from "components/BaseButton";
import Friends from "components/Friends";
import StateContext from "context/StateContext";

const Sidebar = () => {
  const { users } = useContext(StateContext);
  useEffect(() => {}, [users]);

  const renderFriends = useMemo(() => {
    return users.map((user) => (
      <Friends
        key={user.id}
        name={user.name}
        imgSrc={user.profileImage}
        alt={user.name}
      />
    ));
  },[users]);

  return (
    <div className="sidebar">
      <SidebarListItems />
      <BaseButton btnClass={"sidebar__btn"}>show more</BaseButton>
      <hr />
      {renderFriends}
    </div>
  );
};

export default Sidebar;
