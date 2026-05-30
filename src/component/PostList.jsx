import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListe } from "../Store/PostList-Store";
import WellCome from "./WellcomeMEssage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  
  const posts = useLoaderData()

  return (
    <>
      {" "}
      <div className="post">
        {posts.length === 0 && <WellCome />}
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export const PostLoader = ()=>{
  return  fetch("https://dummyjson.com/posts")
       .then((res) => res.json())
       .then((data) => {
         return data.posts
       },);
}
export default PostList;
