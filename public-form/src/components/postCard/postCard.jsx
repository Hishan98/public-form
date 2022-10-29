import "./postCard.scss";
import postImg from "../../assets/images/bg.jpg";
import axios from "axios";
import FormData from "form-data";

import React, { useContext, useState, useRef } from "react";
import { CommonContext } from "../../context/commonContext";
import Textarea, { resize } from "react-expanding-textarea";
import { toast } from "react-toastify";

const PostCard = ({ updatePosts }) => {
  //common context config
  const { host, userData } = useContext(CommonContext);
  const [postCaption, setPostCaption] = useState("");
  const [postImage, setPostImage] = useState("");
  const [displayImage, setDisplayImage] = useState("");

  //Text area Config
  resize(5, Textarea.current);

  //image upload
  const inputFile = useRef(null);
  const onBrowserButtonClick = () => {
    inputFile.current.click();
  };

  const handleCapImage = (event) => {
    setPostImage(event.currentTarget.files[0]);
    const objectUrl = URL.createObjectURL(event.currentTarget.files[0]);
    setDisplayImage(objectUrl);
  };

  // --->

  const handleCapChange = (event) => {
    setPostCaption(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (event.key === "Enter") {
      let formData = new FormData();

      formData.append("post_media", postImage);
      formData.append("user_name", userData.userName);
      formData.append("user_image_url", userData.userImage);
      formData.append("caption", postCaption);

      try {
        await axios.post(host + "/api/posts", formData).then((res) => {
          updatePosts(res.data.results);
          setPostCaption("");
          handleCapImage("");
        });
      } catch (error) {
        console.log("error: " + error);
        toast.error("error occurred", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <div className=" createPost">
      <div className="postHeader">
        <div
          className="image bgImage"
          style={{ backgroundImage: `url('${userData.userImage}')` }}
        ></div>
        <h2>{userData.userName}</h2>
        <div className="controllers">
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
            onChange={handleCapImage}
          />
          <div className="btn btn-outlined" onClick={onBrowserButtonClick}>
            Add an image
          </div>
          <div className="btn" onClick={handleSubmit}>
            Post Now
          </div>
        </div>
      </div>
      <div className="postContent">
        {displayImage ? (
          <div
            className="image bgImage"
            style={{ backgroundImage: `url('${displayImage}')` }}
          ></div>
        ) : (
          ""
        )}

        <Textarea
          className="postCaption"
          maxLength="1000"
          onChange={handleCapChange}
          onKeyDown={handleSubmit}
          value={postCaption}
          placeholder="Whats on your mind ?"
        />
      </div>
    </div>
  );
};

export default PostCard;
