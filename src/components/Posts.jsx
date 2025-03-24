import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [postList, setPostList] = useState(postData);

  const handleLike = (postId) => {
    const newPostList = postList.map((post) => 
      post.id === postId ? 
      { ...post, likes: post.likes + 1 } 
      : post
    );
    setPostList(newPostList);
  };

  const handleDisLike = (postId) => {
    const newPostList = postList.map((post) => (
      (post.id === postId && post.likes > 0)? 
      { ...post, likes: post.likes - 1 } 
      : post
    ));
    setPostList(newPostList);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>

      {/* Post Board */}
      {postList.map((item) => (
      <div className="post-list" key={item.id}>
        <div className="post-item">
          <div className="post-header">
            <h2>{item.title}</h2>
            <div className="post-social-media-stats">
              <span className="stats-topic">Likes: </span>
              <span className="post-likes">{item.likes}</span>
            </div>
          </div>
          <p className="post-content">
            {item.content}
          </p>
          <div className="post-actions">
            <button 
              className="like-button"
              onClick={() => handleLike(item.id)}
              >
                Like
            </button>
            <button 
              className="dislike-button"
              onClick={() => handleDisLike(item.id)}
              >
                Dislike
            </button>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Posts;
