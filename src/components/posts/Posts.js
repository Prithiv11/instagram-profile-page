import React, { useState } from "react";
import "./posts.css";
import { globalEvent } from "../../tools/common";

function Posts({ data }) {
  let temp = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let [postsData, setPostsData] = useState(temp);
  const [activeNav, setActiveNav] = useState("Posts");
  let postColums = [
    {
      name: "Posts",
      icon: "posts.svg",
    },
    {
      name: "Reels",
      icon: "reels.svg",
    },
    {
      name: "Tags",
      icon: "tags.svg",
    },
  ];
  const upatePosts = () => {
    setActiveNav([...activeNav, ...temp]);
  };
  return (
    <div className="posts-component-wrapper">
      <div className="posts-navigators">
        {postColums.map((item, i) => {
          return (
            <div
              className={`posts-nav-item ${
                activeNav === item.name ? "active" : ""
              }`}
              key={i}
              onClick={() => {
                setActiveNav(item.name);
              }}
            >
              <div
                className="item-icon icon"
                style={{ backgroundImage: `url(/assets/svg/${item.icon})` }}
              ></div>
              <div className="item-name">{item.name}</div>
            </div>
          );
        })}
      </div>
      {activeNav === "Posts" && (
        <div className="posts-container">
          {postsData.map((post, i) => {
            return (
              <div
                className="post"
                style={{ backgroundImage: `url(${data[i].thumbnailUrl})` }}
                key={i}
                onClick={() => {
                  globalEvent.emit("open-dialog", {
                    component: "post-viewer",
                    data: { data, index: i },
                  });
                }}
              ></div>
            );
          })}
        </div>
      )}
      {activeNav === "Reels" && <div className="test">No reels</div>}
      {activeNav === "Tags" && <div className="test">No posts</div>}
    </div>
  );
}

export default Posts;
