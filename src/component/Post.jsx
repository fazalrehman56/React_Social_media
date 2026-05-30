import { useContext } from "react";
import {PostListe}from "../Store/PostList-Store";
import { TiDeleteOutline } from "react-icons/ti";

const Post = ({post}) => {
  const {deletePost} = useContext(PostListe)

  return (
    <div className="card myown" style={{ width: "24rem" }}> 
    <span onClick={()=>{
         
           deletePost(post.id)
         
      }}  className="delelet"> 
       <TiDeleteOutline />
    </span>

      {/* <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." /> */}
      <div className="card-body">  
        <h5 className="card-title">{post.title}
         
        </h5>
        <p className="card-text">
         {post.body}
        </p>
       <div>
           {post.tags.map((taq,index)=>(
              <a key={index} href="#" className="btn btn-primary own">{taq} </a>
        ))}
        
        </div>
      </div>
    </div>
  );
};

export default Post;
