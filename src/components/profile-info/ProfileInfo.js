import React, { useState } from "react";
import "./profileInfo.css";
import { globalEvent } from "../../tools/common";

function ProfileInfo({ data }) {
  let mutual = [];
  let others = 0;
  const [isFollowing, setIsFollowing] = useState(false);
  if (data) {
    mutual = data.mutualFriends.slice(0, 2);
    others = data.mutualFriends.length - 2;
  }
  const handleMore = () => {
    globalEvent.emit("open-dialog", {
      component: "more",
    });
  };
  return (
    <div className="profileinfo-wrapper">
      <div className="profileInfo-main-row">
        <div className="profile-image"></div>
        <div className="profile-actions">
          <div className="profile-name">
            <div className="name-text">{data?.username}</div>
            {data?.verified && <div className="verified-badge"></div>}
            <div className="more" onClick={handleMore}>
              ...
            </div>
          </div>
          <div className="intraction-actions">
            <div
              className="intract-btn btn-follow"
              onClick={() => {
                setIsFollowing(!isFollowing);
              }}
            >
              {isFollowing ? "Following" : "Follow"}
            </div>
            <div className="intract-btn btn-messaage">Message</div>
          </div>
        </div>
      </div>
      <div className="profile-about-row">
        <div className="user-name">{data?.name}</div>
        <div className="bio">{data?.bio}</div>

        <div className="followers">
          Followed by
          {mutual.map((follower, i) => {
            return (
              <div className="follower" key={i}>
                {follower.name}
              </div>
            );
          })}
          {others ? `+ ${others} more` : ""}
        </div>
      </div>
      <div className="profile-statistics">
        {data?.statistics.map((item, i) => {
          return (
            <div key={i} className="statistic-data">
              <div className="data-value">{item.value}</div>
              <div className="data-title">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileInfo;
