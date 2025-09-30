"use client";
import React from "react";
import {
  Card,
  Col,
  Row,
  Avatar,
  Image,
  Badge,
  Button,
  Select,
  Tag,
  Divider,
  Input,
  Space,
} from "antd";
import { useState } from "react";
import { Table, Empty } from "antd";
import type { TableColumnsType } from "antd";
import { createStyles } from "antd-style";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  PieChartOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  SettingOutlined,
  SendOutlined,
  PictureOutlined,
  LinkOutlined,
  UserOutlined,
  FilterOutlined,
  PlusCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
  color: string;
  text: string;
};

interface DataType {
  key: React.Key;
  name: string;
  age: string;
  tracking: string;
  dateCreate: string;
  status: string;
  buyType: string;
}
const columns: TableColumnsType<DataType> = [
  {
    title: "Order Name",
    width: 200,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Order ID",
    width: 150,
    dataIndex: "age",
    key: "age",
    fixed: "left",
    sorter: true,
  },
  { title: "Tracking Number", dataIndex: "tracking", key: "1" },
  { title: "Date Create", dataIndex: "dateCreate", key: "2" },
  { title: "Status", dataIndex: "status", sorter: true, key: "3" },
  { title: "Buy Type", dataIndex: "buyType", key: "4" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const dataSource: DataType[] = [
  {
    key: "1",
    name: "Olivia",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "Penning",
    buyType: "COD",
  },
  {
    key: "2",
    name: "Ethan",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "done",
    buyType: "COD",
  },
  {
    key: "3",
    name: "Olivia",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "Transpot",
    buyType: "COD",
  },
  {
    key: "4",
    name: "Ethan",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "done",
    buyType: "Shopee",
  },
  {
    key: "5",
    name: "Olivia",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "done",
    buyType: "COD",
  },
  {
    key: "6",
    name: "Ethan",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "done",
    buyType: "COD",
  },
  {
    key: "7",
    name: "Olivia",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "done",
    buyType: "Tiktok",
  },
  {
    key: "8",
    name: "Ethan",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "Penning",
    buyType: "COD",
  },
  {
    key: "10",
    name: "Olivia",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "done",
    buyType: "COD",
  },
  {
    key: "11",
    name: "Ethan",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "done",
    buyType: "COD",
  },
  {
    key: "12",
    name: "Olivia",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "done",
    buyType: "COD",
  },
  {
    key: "13",
    name: "Ethan",
    age: "THO000012332",
    tracking: "EF582568151TH",
    dateCreate: "10/05/2025",
    status: "done",
    buyType: "COD",
  },
];

export default function Page() {
  const [items, setItems] = useState<MenuItem[]>([
    {
      key: "1",
      icon: <PieChartOutlined />,
      label:
        "https://www.mangozero.com/wp-content/uploads/2023/11/IMG_7598-600x600.jpg",
      color: "#fe7d1e",
      text: "Hello.",
    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label:
        "https://www.matichon.co.th/wp-content/uploads/2016/03/1654783_1218908464799845_4985007302131573274_o.jpg",
      color: "#0375e4",
      text: "My name is Somchai JaiDee from ABC.",
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label:
        "https://s.isanook.com/ca/0/ud/276/1380909/12794445_1218908274799864_3867112738991391881_n.jpg",
      color: "#54c61b",
      text: "I have one question for ask you.",
    },
    {
      key: "4",
      icon: <AppstoreOutlined />,
      label:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbQ8xDfDs2JELoFWiBIu9Xid1ZYyDNB63Cg&s",
      color: "#9356db",
      text: "About Mr.Nontawat Wichapha.",
    },
    {
      key: "5",
      icon: <MailOutlined />,
      label:
        "https://s.isanook.com/ca/0/ui/278/1393005/japanese-artist-turns-animals-that-have-become-famous-on-the-internet-into-sculptures-5bd86b0498b2a__880_1540983731.jpg",
      color: "#0375e4",
      text: "Why he so handsome and very smart.",
    },
    {
      key: "6",
      icon: <MenuFoldOutlined />,
      label:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQW77amvFH85aqDHiSeujurIQZGPPUJdnnTsN-5HGfVDFF80QPYj-Rsnrd8AOceImEWr0&usqp=CAU",
      color: "#fe7d1e",
      text: "Please answer me about this question.",
    },
    {
      key: "7",
      icon: <MailOutlined />,
      label:
        "https://mona50753952.wordpress.com/wp-content/uploads/2020/07/977084c8.jpg?w=568",
      color: "#0375e4",
      text: "If you don't answer me i will die any time.",
    },
    {
      key: "8",
      icon: <MailOutlined />,
      label: "https://fbi.dek-d.com/24/1284875/107627656",
      color: "#0375e4",
      text: "Please!!!!!!!!!!!!!",
    },
    {
      key: "9",
      icon: <MenuFoldOutlined />,
      label: "https://img.kapook.com/u/2015/pree/pet7/q7_15.jpg",
      color: "#fe7d1e",
      text: "I'm so sad.",
    },
    {
      key: "10",
      icon: <MailOutlined />,
      label:
        "https://www.siamfishing.com/_pictures/content/upload2007/200709/11906073861.jpg",
      color: "#0375e4",
      text: "Answer me sir.",
    },
    {
      key: "11",
      icon: <MailOutlined />,
      label:
        "https://today-obs.line-scdn.net/0hbdHWTrvnPUt1LhebmrlCHE94PiRGQi5IERhsSClAY38KTXxJShpzflknYi5ZSnoVG0B7KVEqJnpQSX8cQRtz/w280",
      color: "#0375e4",
      text: "please please please",
    },
    {
      key: "12",
      icon: <MenuFoldOutlined />,
      label: "https://us-fbcloud.net/wb/data/1298/1298920-img.utmdse.187yh.jpg",
      color: "#fe7d1e",
      text: ".....",
    },
  ]);
  const [text, setText] = useState("");
  const [orderId, setOrderID] = useState("");
  const [status, setStatus] = useState("");
  const onChange = (value: string) => {
    setStatus(value);
  };

  const handleAdd = () => {
    if (!text.trim()) return; // prevent empty

    const newItem: MenuItem = {
      key: String(items.length + 1),
      icon: <ContainerOutlined />,
      label:
        "https://www.mangozero.com/wp-content/uploads/2023/11/IMG_7598-600x600.jpg", // you can also bind this from another input if needed
      color: "#000",
      text: text, // 👈 use the input value
    };

    setItems([...items, newItem]);
    setText(""); // clear input after adding
  };

  return (
    <div>
      <div className="mr-4 mt-4">
        <Row gutter={[4, 16]} className="pb-4">
          <Col span={24}>
            <Card variant="borderless" className="card-messenger-order-filter">
              <Row gutter={[8, 8]}>
                <Col span={8}>
                  <Input
                    variant="filled"
                    size="large"
                    placeholder="Order Name"
                    value={text}
                    onPressEnter={handleAdd}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Col>
                <Col span={8}>
                  <Input
                    variant="filled"
                    size="large"
                    placeholder="Order ID"
                    value={orderId}
                    onPressEnter={handleAdd}
                    onChange={(e) => setOrderID(e.target.value)}
                  />
                </Col>
                <Col span={8}>
                  {/* <Input
                    variant="filled"
                    size="large"
                    placeholder="Status"
                    value={status}
                    onPressEnter={handleAdd}
                    onChange={(e) => setStatus(e.target.value)}
                  /> */}
                  <Select
                    showSearch
                    variant="filled"
                    size="large"
                    placeholder="Status"
                    value={status}
                    style={{ width: '100%' }}
                    optionFilterProp="label"
                    onChange={onChange}
                    options={[
                      {
                        value: "Done",
                        label: "Done",
                      },
                      {
                        value: "Pending",
                        label: "Pending",
                      },
                      {
                        value: "Transpot",
                        label: "Transpot",
                      },
                    ]}
                  />
                </Col>
                <Col span={24} className="btn-cart">
                  <Button icon={<FilterOutlined />} className="m-2">
                    Query
                  </Button>
                  <Button icon={<ReloadOutlined />} className="m-2">
                    Reset
                  </Button>
                  <Button icon={<PlusCircleOutlined />} className="ml-2">
                    Add new
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <Card variant="borderless" className="card-messenger-order">
              <Table<DataType>
                // className={styles.customTable}
                columns={columns}
                locale={{ emptyText: <Empty description="No Data"></Empty> }}
                dataSource={dataSource}
                scroll={{ x: "max-content", y: 55 * 8 }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

// export default App;
