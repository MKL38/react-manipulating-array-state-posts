import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [posts, setPosts] = useState(postData);

  const updateLikes = (postId, isLike) => {
    setPosts((prev) => {
      return prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: isLike ? post.likes + 1 : Math.max(0, post.likes - 1),
            }
          : post
      );
    });
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {posts.map((post) => (
          <div class="post-item" key={post.id}>
            <div class="post-header">
              <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>
            <p class="post-content">{post.content}</p>
            <div class="post-actions">
              <button
                class="like-button"
                onClick={() => updateLikes(post.id, true)}
              >
                Like
              </button>
              <button
                class="dislike-button"
                onClick={() => updateLikes(post.id, false)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
