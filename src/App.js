import "./App.css";
import ProfileInfo from "./components/profile-info/ProfileInfo";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { globalEvent } from "./tools/common";
import Dialog from "./components/dialog/Dialog";
import Posts from "./components/posts/Posts";
import Navigation from "./components/navigation/Navigation";

function App() {
  const eref = useRef(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((Userposts) => {
        axios
          .get("http://jsonplaceholder.typicode.com/users/1")
          .then(({ data }) => {
            setUserData({
              ...data,
              mutualFriends: [
                { name: "_ram_kamal" },
                { name: "_pulsar_nemi" },
                { name: "akash_here" },
                { name: "dinesh_1945" },
                { name: "agent_vikram" },
              ],
              verified: true,
              bio: "Carpediem!",
              statistics: [
                {
                  name: "posts",
                  value: "1,688",
                },
                {
                  name: "followers",
                  value: "268M",
                },
                {
                  name: "following",
                  value: "624",
                },
              ],
              userPosts: Userposts.data,
              followedByCurrentUser: false,
            });
          });
      });

    return () => {
      globalEvent.removeAllListeners();
      setUserData(null);
    };
  }, []);
  return (
    <div className="App">
      <Dialog />
      {userData ? (
        <div className="main-container">
          <div className="main-wrapper" ref={eref}>
            <ProfileInfo data={userData} />
            <Posts data={userData.userPosts} />
          </div>
        </div>
      ) : (
        ""
      )}
      <Navigation />
    </div>
  );
}

export default App;
