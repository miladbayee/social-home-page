import "./sidebar-item.css";

const SidebarListItem = ({children,title}) => {
  return (
    <li className="sidebar__list_item">
      <div  className='sidebar__list_item__icon'>
      {children}
      </div>
      <span>{title}</span>
    </li>
  );
};

export default SidebarListItem;
