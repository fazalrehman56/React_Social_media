import { useContext, useRef, useState } from "react";
import { PostListe } from "../Store/PostList-Store";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
   
  

  return (
    <Form method="POST" className="fom" >
      <div className="form-floating wid">
        <input
          type="text"
          name="userId"
          className="form-control"
          id="titleInput2"
          placeholder="enter title here"
        />
        <label htmlFor="titleInput1"> USER ID </label>
      </div>
      <div className="form-floating wid">
        <input
          type="text"
          name = "title"
          className="form-control"
          id="titleInput1"
          placeholder="enter title here"
        />
        <label htmlFor="titleInput1">TITLE</label>
      </div>

      <div className="form-floating wid">
        <textarea
          rows="4"
          name="body"
          className="form-control"
          id="textInput"
          placeholder="enter text here"
        />
        <label htmlFor="textInput">TEXT</label>
      </div>

      <div className="form-floating wid">
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tagsInput"
          placeholder="enter tags here"
        />
        <label htmlFor="tagsInput">TAGS</label>
      </div>

      <button
        className="btn btn-primary py-2 btn2"
        type="submit"
        style={{ width: "30%" }}>
        Submit
      </button>
    </Form>
  );
};

 export async function createActionPost (data){
  const FormData = await data.request.formData();
  const PostData = Object.fromEntries(FormData);
  PostData.tags = PostData.tags.split(" ");
  console.log(PostData)
     fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(PostData),
    })
      .then((res) => res.json())
      .then((post)=>console.log(post));
      
      return redirect("/")
 }
export default CreatePost;
