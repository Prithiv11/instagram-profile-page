import React from "react";
import "./navigation.css";

function Navigation() {
  const navigationItems = [
    {
      name: "Home",
      icon: "home.svg",
    },
    {
      name: "Search",
      icon: "search.svg",
      onlyInDesktop: true,
    },
    {
      name: "Explore",
      icon: "explore.svg",
    },
    {
      name: "Reels",
      icon: "reels.svg",
    },
    {
      name: "notifications",
      icon: "liked.svg",
      onlyInDesktop: true,
    },
    {
      name: "Create",
      icon: "create.svg",
    },
    {
      name: "Messenger",
      icon: "messages.svg",
    },
  ];
  return (
    <div className="nav-wrapper">
      <div className="navigation-bar-items">
        {navigationItems.map((navItem, i) => {
          return (
            <div
              key={i}
              className={`nav-bar-item  ${
                navItem.onlyInDesktop ? "dsktop" : ""
              }`}
            >
              <div
                className="nav-bar-item-icon icon"
                style={{
                  backgroundImage: `url(/assets/svg/${navItem.icon})`,
                }}
              ></div>
              <div className="nav-bar-item-name">{navItem.name}</div>
            </div>
          );
        })}
        <div className="nav-bar-item">
          <div className="icon profile"></div>
          <div className="nav-bar-item-name">Profile</div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
