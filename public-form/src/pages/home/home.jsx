import "./home.scss";
import Posts from "../../components/posts/posts";
import PostCard from "../../components/postCard/postCard";

import { toast } from "react-toastify";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { CommonContext } from "../../context/commonContext";

const Home = () => {
  //common context config
  const { host } = useContext(CommonContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsArray = async () => {
      try {
        const postData = await getPosts(host);
        setPosts(postData);
      } catch (error) {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    };

    getPostsArray();
  }, [host]);

  return (
    <div className="container">
      <PostCard />
      {posts.map((element) => (
        <Posts
          key={element._id}
          post_id={element._id}
          user_name={element.user_name}
          user_image={element.user_image_url}
          post_media={element.post_media}
          caption={element.caption}
          date={element.date}
        />
      ))}
    </div>
  );
};

const getPosts = async (host) => {
  try {
    const postData = await axios.get(host + "/api/posts");
    return postData.data.results;
  } catch (error) {
    return error;
  }
};

export default Home;
