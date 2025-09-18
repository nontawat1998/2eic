import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import Logo from "../favicon.ico";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="nav">
        <Image width={60} src="../favicon.ico" />
      </div>
    </div>
  );
};

export default Navbar;
