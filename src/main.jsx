import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CraetePost,{createActionPost} from "./component/CreatePost";
import PostList,{PostLoader} from "./component/PostList";
const router = createBrowserRouter([{
  path : "/" , element : <App/>, children : [{path: "/create-post", element: <CraetePost/>,action: createActionPost},{path:"/", element : <PostList/>,loader: PostLoader}]
}])

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
);
