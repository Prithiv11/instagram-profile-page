import React from "react";
import "./profileMore.css";
import { globalEvent } from "../../../../tools/common";

function ProfileMore() {
  const menuOptions = [
    {
      name: "Block",
      critical: true,
    },
    {
      name: "Restrict",
      critical: true,
    },
    {
      name: "Report",
      critical: true,
    },
    {
      name: "Share to...",
      critical: false,
    },
    {
      name: "Embed",
      critical: false,
    },
    {
      name: "About this account",
      critical: false,
    },
    {
      name: "Cancel",
      critical: false,
    },
  ];

  return (
    <div className="profile-more-wrapper">
      <div className="menu-container">
        {menuOptions.map((option, i) => {
          return (
            <>
              <div
                key={i}
                className="option"
                style={{ color: option.critical ? "#ed4956" : "#fffff" }}
                onClick={() => {
                  globalEvent.emit("close-dialog", {
                    component: "more",
                  });
                }}
              >
                {option.name}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileMore;
