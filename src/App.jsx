
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Fotter from './component/Footer';
import SideBar from './component/SideBar';
import PostList from './component/PostList';
import CraetePost from './component/CreatePost';
import { useState } from 'react';
import PostListProvider from './Store/PostList-Store';
import { Outlet } from "react-router-dom";
import CreatePost from './component/CreatePost';



function App() {
  const [checkName,SetcheckName]= useState("Dashboard")
  return (
    <PostListProvider>
    <div className='app-component'>
      <SideBar name={checkName} SetcheckName={SetcheckName}></SideBar>
      <div className='items-copunent'>
      <Header></Header>
       <Outlet/>
      <Fotter></Fotter>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
