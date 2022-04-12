import React from "react";
import { motion } from "framer-motion";
import "./posts.scss";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="posts">
      {posts.map((post) => (
        <motion.li 
        initial={{
          x: 1000,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }} key={post.id} className="posts-item">
          <h2 className="posts__title">{post.title}</h2>
          <p className="posts__text">{post.body}</p>
        </motion.li>
      ))}
    </ul>
  );
};

export default Posts;
