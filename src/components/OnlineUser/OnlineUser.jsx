import './online-user.css'
import UserImage from "components/UserImage";

const OnlineUser = ({ name, imgSrc,imgAlt }) => {
  return (
    <div className="online__users">
      <div className="online__users_img">
        <UserImage imgSrc={imgSrc} imgAlt={imgAlt} />
        <span></span>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default OnlineUser;
