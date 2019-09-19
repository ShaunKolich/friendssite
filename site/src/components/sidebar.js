import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="#about">
        About Me
      </a>

      <a className="menu-item" href="#contact">
        Contact Me
      </a>

      <a className="menu-item" href="#showcase">
        Portfolio
      </a>
    </Menu>
  );
};
