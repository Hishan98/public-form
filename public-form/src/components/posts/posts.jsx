import "./posts.scss";
import Comments from "../comments/comments";
import CommentCard from "../commentCard/commentCard";
import person from "../../assets/images/temp_person.jpg";
import postImg from "../../assets/images/bg.jpg";

const Posts = () => {
  return (
    <div className="post">
      <div className="postHeader">
        <div
          className="image bgImage"
          style={{ backgroundImage: `url('${person}')` }}
        ></div>
        <h2>DancingElephant</h2>
        <p>5 minutes ago</p>
      </div>

      <div className="postContent-img">
        <div
          className="image bgImage"
          style={{ backgroundImage: `url('${postImg}')` }}
        ></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aperiam,
          tempora accusamus explicabo libero reprehenderit voluptate dolorum
          laboriosam, mollitia ipsum, eius labore rem? A neque quas quia fugit
          repudiandae quos!
        </p>
      </div>

      {/* <div className="postContent-txt">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aperiam,
          tempora accusamus explicabo libero reprehenderit voluptate dolorum
          laboriosam, mollitia ipsum, eius labore rem? A neque quas quia fugit
          repudiandae quos!
        </p>
      </div> */}

      <hr />
      <CommentCard />
      <Comments />
    </div>
  );
};

export default Posts;
