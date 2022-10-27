import "./commentCard.scss";
import person from "../../assets/images/temp_person.jpg";

import React, { useCallback } from "react";
import Textarea from "react-expanding-textarea";

const CommentCard = () => {
  const handleChange = useCallback((e) => {
    console.log("Changed value to: ", e.target.value);
  }, []);

  return (
    <div className="comment">
      <div
        className="image bgImage"
        style={{ backgroundImage: `url('${person}')` }}
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
