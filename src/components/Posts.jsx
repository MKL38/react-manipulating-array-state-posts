import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [postList, setpostList] = useState(postData);

  const addLikes = (postid) => {
    const addPostList = postList.map((post) => {
      if (post.id === postid) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setpostList(addPostList);
  };

  const deleteLike = (postid) => {
    const deletePostList = postList.map((post) => {
      if (post.id === postid && post.likes > 0) {
        return { ...post, likes: post.likes - 1 };
      }
      return post;
    });
    setpostList(deletePostList);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
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
            <p className="post-content">{item.content}</p>
            <div className="post-actions">
              <button className="like-button" onClick={() => addLikes(item.id)}>
                Like
              </button>
              <button className="dislike-button" onClick={() => deleteLike(item.id)}>
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
