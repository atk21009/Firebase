import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext.js";

export default function Dashboard() {
  const { currentUser, getPosts, deletePost } = useAuth();
  const [postLists, setPostList] = useState([])

  useEffect(() => {
    const GetPosts = async () => {
      const data = await getPosts()
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    GetPosts()
  })

  function DeletePost(id) {
    deletePost(id)
  }
  return (
    <>
      <div className="dsh-content">
        {postLists.map((post) => {
          return( 
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
                <h3>@{post.author.name}</h3>
              </div>
              <div className="deletePost">
                {post.author.id === currentUser.uid && (
                  <button onClick={() => {DeletePost(post.id)}}>X</button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
          </div>
          )
        })}
      </div>
    </>
  );
}
