import "./header.css";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineNotification,
} from "react-icons/ai";
import UserImage from "components/UserImage";
import InputText from "components/InputText";

const imgSrc='assets/images/users/1.jpg'

const Header = () => {
  return (
    <div className="header">
      {/* left side  */}
      <div className="header__left">
        <div className="header__logo">
          <h2>Yassocial</h2>
        </div>
      </div>

      {/* center side */}
      <div className="header__center">
        <div className="header__search">
          <AiOutlineSearch className="header__search_icon" />
          <InputText placeholder='Search users,posts or vidos' />
        </div>
      </div>

      {/* right side */}
      <div className="header__right">
        <div className="header__nav">
          {/* menu */}
          <div className="header__menu">
            <span className="header__menu_list">Home</span>
            <span className="header__menu_list">Timeline</span>
          </div>

          {/* notifactions */}
          <div className="header__notifactions">
            <div className="header__notifactions_list">
              <AiOutlineUser className="header__notifactions_list__icon" />
              <span className="badge">2</span>
            </div>
            <div className="header__notifactions_list">
              <AiOutlineMessage className="header__notifactions_list__icon" />
              <span className="badge">3</span>
            </div>
            <div className="header__notifactions_list">
              <AiOutlineNotification className="header__notifactions_list__icon" />
              <span className="badge">1</span>
            </div>
          </div>

          {/* user image */}
          <div className='header__user'>
          <UserImage imgSrc={imgSrc} imgAlt={'user 1'}   />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
