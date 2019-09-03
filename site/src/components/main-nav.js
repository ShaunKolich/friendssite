import React from "react";
import ReactDOM from "react-dom";

import "../css/style.css";
import SideBar from "./sidebar";

function Menu() {
  return (
    <div id="Menu">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"Menu"} />

      <div id="page-wrap">
        
      </div>
    </div>
  );
}

export default Menu;