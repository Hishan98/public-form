import "./commentCard.scss";
import React, { useCallback, useContext } from "react";

import { CommonContext } from "../../context/commonContext";

import Textarea from "react-expanding-textarea";

const CommentCard = () => {
  //common context config
  const { userData } = useContext(CommonContext);

  const handleChange = useCallback((e) => {
    console.log("Changed value to: ", e.target.value);
  }, []);

  return (
    <div className="comment">
      <div
        className="image bgImage"
        style={{ backgroundImage: `url('${userData.userImage}')` }}
      ></div>

      <Textarea
        className="txt-comment"
        maxLength="1000"
        onChange={handleChange}
        placeholder="Enter your comment here"
      />
    </div>
  );
};

export default CommentCard;
