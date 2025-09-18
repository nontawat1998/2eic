"use client";
import React, { useState } from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import Logo from "../favicon.ico";
import {
  AntDesignOutlined,
  UserOutlined,
  PlusCircleOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Avatar, Input, Tooltip } from "antd";
import { Col, Row } from "antd";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu, Badge, Popover } from "antd";
import { usePathname, useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "/", icon: <PieChartOutlined />, label: "Dashboard" },
  {
    key: "/messenger",
    icon: (
      <Badge size="small" count={5}>
        <CommentOutlined />
      </Badge>
    ),
    label: "Messenger",
  },
  { key: "/learn", icon: <ContainerOutlined />, label: "Option 3" },
];
const clickContent = (
  <div>
    <Avatar size={50} src="https://image.springnews.co.th/uploads/images/contents/w1024/2024/11/5xN8L1lbxnH3Sk1nm6Wp.webp?x-image-process=style/lg-webp" />
    <strong style={{margin: '12px'}}>Nontawat Wichapha (นนทวัฒน์ วิชาผา)</strong><br />
    <div className="content-popover mt-4">
      <span> profile</span>
    </div>
    <div className="content-popover">
      <span> Setting</span>
    </div>
    <div className="content-popover">
      <span> Logout</span>
    </div>
  </div>
);

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const router = useRouter();
  const pathname = usePathname();
  const handleClick: MenuProps["onClick"] = (e) => {
    router.push(e.key as string);
  };

  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <div>
      <div className="side">
        <Row className="mb-6">
          <Col span={12}>
            <Popover
              content={clickContent}
              trigger="click"
              style={{ width: 500}}
              placement="right" 
              open={open}
              onOpenChange={handleOpenChange}
            >
              <Avatar src="https://image.springnews.co.th/uploads/images/contents/w1024/2024/11/5xN8L1lbxnH3Sk1nm6Wp.webp?x-image-process=style/lg-webp" />
            </Popover>
          </Col>
          <Col span={12} className="avatar-right">
            <Avatar
              className="avatar-background"
              icon={<PlusCircleOutlined />}
            />
          </Col>
          {/* <Col span={24}>
            <Input className="input-box" size="large" placeholder="large size" variant="outlined" prefix={<UserOutlined />} />
          </Col> */}
        </Row>

        <Menu
          selectedKeys={[pathname]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          className="mt-4"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SideBar;
