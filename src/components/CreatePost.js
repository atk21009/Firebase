import React, { useState } from "react";
import { useAuth } from '../contexts/AuthContext'

import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const { createPost }= useAuth()
  const navigate = useNavigate()
    function createPost_()  {
        createPost(title, postText)
        
    navigate("/")
    }


  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            className="titleInput"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Posts: </label>
          <textarea
            placeholder="Post..."
            className="postInput"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button className="postSubmit" onClick={createPost_}>Submit Post</button>
      </div>
    </div>
  );
}
