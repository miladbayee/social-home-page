import "./feed.css";
import Share from "components/Share";
import Posts from "components/Posts";

const Feed = () => {

  return (
    <div className="feed">
      <Share />
      <Posts />
    </div>
  );
};

export default Feed;
