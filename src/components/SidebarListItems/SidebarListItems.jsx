import "./sidebar-items.css";
import { useMemo } from "react";
import SidebarListItem from "components/SidebarListItem";
import { sidbarList } from "constant/sidebarListConst";

const SidebarListItems = () => {
  const listItem = useMemo(() => {
    return sidbarList.map((list) => (
      <SidebarListItem key={list.id} title={list.title}>
        {list.iconName}
      </SidebarListItem>
    ));
  }, []);

  return <ul className="sidebar__list">{listItem}</ul>;
};

export default SidebarListItems;
