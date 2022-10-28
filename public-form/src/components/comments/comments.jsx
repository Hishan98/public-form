import "./comments.scss";

const Comments = (props) => {
  return (
    <div className="comment">
      <div
        className="image bgImage"
        style={{ backgroundImage: `url('${props.user_image}')` }}
      ></div>

      <div className="txt-label">
        <h3>{props.user_name}</h3>
        {props.user_comment}
      </div>
    </div>
  );
};

export default Comments;
