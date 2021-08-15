import { useContext } from "react";
import "./posts.css";
import PostItem from "components/PostItem";
import StateContext from "context/StateContext";

const Posts = () => {
  const {posts} =useContext(StateContext)
  const renderPost=posts.map(post=>(<PostItem key={post.id} {...post} />))
  return (
    <div className='posts'>
      {renderPost}
    </div>
  );
};

export default Posts;
