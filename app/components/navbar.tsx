import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import Logo from "../favicon.ico";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

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
