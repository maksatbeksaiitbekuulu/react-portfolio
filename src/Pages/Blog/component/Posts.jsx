import React from "react";
import "./posts.scss";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id} className="posts-item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
