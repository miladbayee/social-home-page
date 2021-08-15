import "./postitem-footer.css";
import { useContext } from "react";
import {
  AiFillLike,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLike,
} from "react-icons/ai";
import { toggleHeartAction, toggleLikeAction } from "context/actions/likesActions";
import DispatchContext from "context/DispatchContext";

const PostItemFooter = ({ ...props }) => {
  const dispatch = useContext(DispatchContext);


  const { postId, isLiked, isHearted, likeCount, commentCount } = props;

  const handleClickLike = (id) => {
    dispatch(toggleLikeAction(id));
  };

  const handleClickHeart = (id) => {
    dispatch(toggleHeartAction(id));
  };
  return (
    <div className="post__footer">
      <div className="post__like">
        <div onClick={() => handleClickLike(postId)} className="post__lik_icon">
          {isLiked ? (
            <AiFillLike style={{ color: "blue" }} />
          ) : (
            <AiOutlineLike />
          )}
        </div>
        <div onClick={() => handleClickHeart(postId)} className="post__lik_icon">
          {isHearted ? (
            <AiFillHeart style={{ color: "red" }} />
          ) : (
            <AiOutlineHeart />
          )}
        </div>
        <p>{likeCount} people like it</p>
      </div>
      <div className="post__comment">
        <p>{commentCount} comments</p>
      </div>
    </div>
  );
};

export default PostItemFooter;
