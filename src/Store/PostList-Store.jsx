import { act, createContext, useReducer,useState,useEffect } from "react";

export const PostListe = createContext({
  PostList: [],
  addPost: () => {},
  
  deletePost: () => {},
});

const PostListReducer = (currentvalue, action) => {
  let current = currentvalue;
  if (action.type === "delete") {
    current = currentvalue.filter((post) => post.id !== action.paylod.postid);
  }
  else if(action.type === "add"){
      current = [...currentvalue ,action.payload]
  }
  else if(action.type==="add2"){
    current = action.payload.posts 
  }
  return current;
};

const PostListProvider = ({ children }) => {
  const [PostList, dispatchPostList] = useReducer(PostListReducer,[]); // postList yaha sy araha hn
  const addPost = (post) => {
    dispatchPostList({
      type: "add",
      payload: post,
    });
  };

  
  const addPost2 = (posts) => {
    dispatchPostList({
      type: "add2",
      payload: {
      posts
      },
    });
  };
   
   
  const deletePost = (postid) => {
    dispatchPostList({
      type: "delete",
      paylod: {
        postid,
      },
    });
  };

  return (
    <PostListe.Provider value={{ PostList, addPost, deletePost }}>
      {children}{" "}
    </PostListe.Provider>
  ); // phr value m dal diya ta ky sab use kr sky
};
export default PostListProvider;

// const DefaultPostList = [
//   {
//     id: "1",
//     title: "hello bahi  kia? ",
//     body: "Pta nahi mae  nhi-",
//     tags: ["St", "and happy"],
//   },

//   {
//     id: "2",
//     title: "h kia? ",
//     body: "Pta nahi maa to mugood for me-",
//     tags: ["Stay Away Stay Safe", "and happy"],
//   },
// ];
