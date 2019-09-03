import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="">
        About Us
      </a>

      <a className="menu-item" href="/">
        Contact Us
      </a>

      <a className="menu-item" href="/">
        Store
      </a>
    </Menu>
  );
};
