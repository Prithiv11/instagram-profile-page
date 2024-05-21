import React, { useState } from "react";
import "./postViewer.css";
import { globalEvent } from "../../../../tools/common";

function PostViewer({ data }) {
  const [postData, setData] = useState(data.data[data.index]);
  return (
    <div className="previewer-wrapper">
      <div
        className="nav-action prev icon"
        onClick={() => {
          setData(data.data[postData.id - 2]);
        }}
      ></div>
      <div
        className="nav-action next icon"
        onClick={() => {
          console.log(postData);
          console.log(data.data[postData.id]);
          setData(data.data[postData.id]);
        }}
      ></div>
      <div
        className="media-viewer"
        style={{ backgroundImage: `url(${postData.url})` }}
      ></div>
      <div
        className="close-dialog"
        onClick={() => {
          globalEvent.emit("close-dialog", {
            component: "more",
          });
        }}
      ></div>
    </div>
  );
}

export default PostViewer;
