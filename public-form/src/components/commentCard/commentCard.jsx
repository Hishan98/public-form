import "./commentCard.scss";
import React, { useContext, useState } from "react";
import axios from "axios";

import { CommonContext } from "../../context/commonContext";

import Textarea from "react-expanding-textarea";

const CommentCard = (props, { setComments }) => {
  //common context config
  const { host, userData } = useContext(CommonContext);
  const [comment, setComment] = useState([]);

  // const testFunction = () => {};

  //add more comments
  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const commentModel = {
      post_id: props.post_id,
      name: userData.userName,
      url: userData.userImage,
      comment: comment,
    };

    try {
      await axios.post(host + "/api/comments", commentModel).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comment">
      <form className="comment" onSubmit={handleSubmit}>
        <div
          className="image bgImage"
          style={{ backgroundImage: `url('${userData.userImage}')` }}
        ></div>

        <Textarea
          className="txt-comment"
          maxLength="1000"
          placeholder="Enter your comment here"
          onKeyPress={handleChange}
        />
        <button type="submit">Puka</button>
      </form>
    </div>
  );
};

export default CommentCard;
