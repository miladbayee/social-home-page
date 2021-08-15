import './friends.css'

import UserImage from "components/UserImage";

const Friends = ({ name, imgSrc, imgAlt }) => {
  return (
    <div className="friends__container">
      <UserImage
        imgSrc={imgSrc}
        imgAlt={imgAlt}
      />
      <span>{name}</span>
    </div>
  );
};

export default Friends;
