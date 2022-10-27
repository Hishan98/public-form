import "./comments.scss";
import person from "../../assets/images/temp_person.jpg";

const Comments = () => {
  return (
    <div className="comment">
      <div
        className="image bgImage"
        style={{ backgroundImage: `url('${person}')` }}
      ></div>

      <div className="txt-label">
        <h3>PinkMonkey</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aperiam,
        tempora accusamus explicabo libero reprehenderit voluptate dolorum
        laboriosam, mollitia ipsum, eius labore rem? A neque quas quia fugit
        repudiandae quos!
      </div>
    </div>
  );
};

export default Comments;
