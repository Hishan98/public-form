import "./posts.scss";
import Comments from "../comments/comments";
import CommentCard from "../commentCard/commentCard";

import { toast } from "react-toastify";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { CommonContext } from "../../context/commonContext";

//Time Ago
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const Posts = (props) => {
  //common context config
  const { host } = useContext(CommonContext);
  const [comments, setComments] = useState([]);

  // make wrapper function to give child

  useEffect(() => {
    const getCommentsArray = async () => {
      try {
        const commentData = await getComments(host, props.post_id);
        setComments(commentData);
      } catch (error) {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    };
    getCommentsArray();
  }, [host, props.post_id]);

  return (
    <div className="post">
      <div className="postHeader">
        <div
          className="image bgImage"
          style={{ backgroundImage: `url('${props.user_image}')` }}
        ></div>
        <h2>{props.user_name}</h2>
        <p>{timeAgo.format(new Date(props.date))}</p>
      </div>

      {props.post_media ? (
        <div className="postContent-img">
          <div
            className="image bgImage"
            style={{
              backgroundImage: `url('${host + "/" + props.post_media}')`,
            }}
          ></div>
          <p>{props.caption}</p>
        </div>
      ) : (
        <div className="postContent-txt">
          <p>{props.caption}</p>
        </div>
      )}
      <hr />
      <CommentCard
        comments={comments}
        setComments={setComments}
        post_id={props.post_id}
      />
      {comments.map((element) => (
        <Comments
          key={element._id}
          comment_id={element._id}
          user_name={element.name}
          user_image={element.url}
          user_comment={element.comment}
          commented_time={timeAgo.format(new Date(element.dateTime))}
        />
      ))}
    </div>
  );
};

const getComments = async (host, postId) => {
  try {
    const commentData = await axios.get(host + "/api/comments/" + postId);
    return commentData.data.results;
  } catch (error) {
    return error;
  }
};

export default Posts;
