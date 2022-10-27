import "./commentCard.scss";
import person from "../../assets/images/temp_person.jpg";

const CommentCard = () => {
  return (
    <div className="comment">
      <div
        className="image bgImage"
        style={{ backgroundImage: `url('${person}')` }}
      ></div>
      <textarea
        className="txt-comment"
        placeholder="Enter your comment here"
      ></textarea>
    </div>
  );
};

export default CommentCard;
