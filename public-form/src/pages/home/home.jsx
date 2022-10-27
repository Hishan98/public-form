import "./home.scss";
import Posts from "../../components/posts/posts";
import PostCard from "../../components/postCard/postCard";

const Home = () => {
  return (
    <div className="container">
      <PostCard />
      <Posts />
    </div>
  );
};

export default Home;
