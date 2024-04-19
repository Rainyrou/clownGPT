import React from "react";
import NewChat from "./newChat";

function sideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1 ">
        <div>
          <NewChat />
        </div>
      </div>
    </div>
  );
}

export default sideBar;
