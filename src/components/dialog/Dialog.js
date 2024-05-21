import React, { useEffect, useState } from "react";
import "./dialog.css";
import { globalEvent } from "../../tools/common";
import ProfileMore from "./components/profile-more/ProfileMore";
import PostViewer from "./components/post-viewer/PostViewer";

function Dialog() {
  const componentsRegistry = {
    more: ProfileMore,
    "post-viewer": PostViewer,
  };
  const [dialogData, setDialogData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [componentName, setComponentName] = useState("");
  let Component = null;
  Component = componentsRegistry[componentName];
  useEffect(() => {
    globalEvent.addListener("open-dialog", (data) => {
      setDialogData(data.data);
      setComponentName(data.component);
      setIsDialogOpen(true);
    });
    globalEvent.addListener("close-dialog", (data) => {
      setIsDialogOpen(false);
    });

    return () => {
      globalEvent.removeAllListeners();
    };
  });
  return (
    <div className={`dialog-wrapper ${isDialogOpen ? "open" : ""}`}>
      {componentName && <Component data={dialogData} />}
    </div>
  );
}

export default Dialog;
