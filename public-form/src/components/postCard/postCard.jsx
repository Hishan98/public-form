import "./postCard.scss";
import postImg from "../../assets/images/bg.jpg";

import React, { useCallback, useContext } from "react";
import { CommonContext } from "../../context/commonContext";
import Textarea, { resize } from "react-expanding-textarea";

const PostCard = () => {
  //common context config
  const { userData } = useContext(CommonContext);

  //Text area Config
  const handleChange = useCallback((e) => {
    console.log("Changed value to: ", e.target.value);
  }, []);

  resize(5, Textarea.current);

  return (
    <div className=" createPost">
      <div className="postHeader">
        <div
          className="image bgImage"
          style={{ backgroundImage: `url('${userData.userImage}')` }}
        ></div>
        <h2>{userData.userName}</h2>
        <div className="controllers">
          <div className="btn btn-outlined">Add an image</div>
          <div className="btn">Post Now</div>
        </div>
      </div>
      <div className="postContent">
        <div
          className="image bgImage"
          style={{ backgroundImage: `url('${postImg}')` }}
        ></div>

        <Textarea
          className="postCaption"
          maxLength="1000"
          onChange={handleChange}
          placeholder="Whats on your mind ?"
        />
      </div>
    </div>
  );
};

export default PostCard;
