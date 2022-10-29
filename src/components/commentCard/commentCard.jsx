import "./commentCard.scss";
import React, { useContext, useState } from "react";
import axios from "axios";

import { CommonContext } from "../../context/commonContext";

import Textarea from "react-expanding-textarea";
import { toast } from "react-toastify";

const CommentCard = ({ post_id, updateComments }) => {
  //common context config
  const { host, userData } = useContext(CommonContext);
  const [commentText, setCommentText] = useState("");

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (event.key === "Enter") {
      const commentModel = {
        post_id: post_id,
        name: userData.userName,
        url: userData.userImage,
        comment: commentText,
      };

      try {
        await axios.post(host + "/api/comments", commentModel).then((res) => {
          updateComments(res.data.results);
          setCommentText("");
        });
      } catch (error) {
        console.log(error);
        if (error.response) {
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error(error.response, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
    }
  };

  return (
    <div className="comment">
      <div
        className="image bgImage"
        style={{ backgroundImage: `url('${userData.userImage}')` }}
      ></div>

      <Textarea
        className="txt-comment"
        maxLength="1000"
        placeholder="Enter your comment here"
        onChange={handleChange}
        onKeyDown={handleSubmit}
        value={commentText}
      />
    </div>
  );
};

export default CommentCard;
