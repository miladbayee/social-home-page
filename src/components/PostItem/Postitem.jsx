import "./post-item.css";
import { useContext } from "react";

import UserImage from "components/UserImage";
import { MdMoreVert } from "react-icons/md";
import PostItemFooter from "./PostItemFooter";
import StateContext from "context/StateContext";

const Postitem = ({ id,userId, postImage, body, time }) => {
  const { users, likes } = useContext(StateContext);

  const userData = users.filter((user) => user.id === userId)[0];
  const like = likes.filter((item) => item.postId === id)[0];

  return (
    <div className="post__container">
      <div className="post__header">
        <div className="post__user">
          <UserImage imgSrc={userData.profileImage} imgAlt={userData.name} />
          <p className="post__user_name">{userData.name}</p>
          <p className="post__date">{time}</p>
        </div>
        <div className="post__more_icon">
          <MdMoreVert />
        </div>
      </div>
      <div className="post__body">
        <p>{body}</p>
        <img src={postImage} alt={body} />
      </div>
      <PostItemFooter {...like} />
    </div>
  );
};

export default Postitem;
