import React from "react";
import { Card, Col, Row, Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type Menuitem = Required<MenuProps>["items"][number];
type Menuitem2 = Required<MenuProps>["items"][number];

const items: Menuitem[] = [
  { key: "1", icon: <PieChartOutlined />, label: "Option 1", color: "#fe7d1e" },
  { key: "2", icon: <DesktopOutlined />, label: "Option 2", color: "#0375e4" },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Option 3",
    color: "#54c61b",
  },
  { key: "4", icon: <AppstoreOutlined />, label: "Option 4", color: "#9356db" },
  { key: "5", icon: <MailOutlined />, label: "Option 5", color: "#0375e4" },
  { key: "6", icon: <MenuFoldOutlined />, label: "Option 6", color: "#fe7d1e" },
  { key: "7", icon: <MailOutlined />, label: "Option 7", color: "#0375e4" },
];
const items2: Menuitem2[] = [
  { key: "1", icon: <PieChartOutlined />, label: "Option 1", color: "#fe7d1e" },
  { key: "2", icon: <DesktopOutlined />, label: "Option 2", color: "#0375e4" },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Option 3",
    color: "#54c61b",
  },
  { key: "4", icon: <PlusOutlined />, label: "Favorites", color: "#e8e8e8ff" },
];
const App: React.FC = () => (
  <div>
    <div className="mr-4 my-4">
      <Card variant="borderless" className="card-learn">
        <Row gutter={[16, 16]} className="px-4 py-4">
          <Col span={8}>
            <Card className=" card-sub-blue">
              <Row className="card-in-sub">
                <Col span={16} className="pr-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  sapiente laudantium totam?, eveniet dolorum at nostrum nihil
                  facilis laboriosam suscipit?
                </Col>
                <Col span={8}>
                  <Image src="./assets/monitor.png" alt="Vercel logomark" />
                </Col>
              </Row>
            </Card>
          </Col>
          {items2.map((item) => (
            <Col span={4} key={item?.key}>
              <Card className="px-1 pt-1 card-sub">
                <Row className="card-in-sub">
                  <Col span={6} className="pr-2">
                    <Avatar
                      shape="square"
                      style={{ backgroundColor: item?.color }}
                      size={36}
                      icon={item?.icon}
                    />
                  </Col>
                  <Col span={18}>{item?.label}</Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="px-4 py-2">
          <strong>Normal Office</strong>
        </div>
        <Row gutter={[16, 16]} className="px-4 pb-4">
          {items.map((item) => (
            <Col span={4} key={item?.key}>
              <Card className="px-1 pt-1 card-sub">
                <Row className="card-in-sub">
                  <Col span={6} className="pr-2">
                    <Avatar
                      shape="square"
                      style={{ backgroundColor: item?.color }}
                      size={36}
                      icon={item?.icon}
                    />
                  </Col>
                  <Col span={18}>{item?.label}</Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="px-4 py-2">
          <strong>Crazy Office</strong>
        </div>
        <Row gutter={[16, 16]} className="px-4 pb-4">
          {items.map((item) => (
            <Col span={4} key={item?.key}>
              <Card className="px-1 pt-1 card-sub">
                <Row className="card-in-sub">
                  <Col span={6} className="pr-2">
                    <Avatar
                      shape="square"
                      style={{ backgroundColor: item?.color }}
                      size={36}
                      icon={item?.icon}
                    />
                  </Col>
                  <Col span={18}>{item?.label}</Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="px-4 py-2">
          <strong>F*ck Office</strong>
        </div>
        <Row gutter={[16, 16]} className="px-4 pb-4">
          {items2.map((item) => (
            <Col span={4} key={item?.key}>
              <Card className="px-1 pt-1 card-sub">
                <Row className="card-in-sub">
                  <Col span={6} className="pr-2">
                    <Avatar
                      shape="square"
                      style={{ backgroundColor: item?.color }}
                      size={36}
                      icon={item?.icon}
                    />
                  </Col>
                  <Col span={18}>{item?.label}</Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  </div>
);

export default App;
