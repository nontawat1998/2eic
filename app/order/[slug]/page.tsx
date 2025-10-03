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
  Modal,
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
export default function Page() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
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
  ]);
  return (
    <div>
      <div className="mr-4 mt-4">
        <Modal
          title={<p>Loading Modal</p>}
          footer={
            <Button type="primary" onClick={showLoading}>
              Reload
            </Button>
          }
          loading={loading}
          open={open}
          onCancel={() => setOpen(false)}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Row gutter={[4, 16]} className="pb-4">
          <Col span={24}>
            <Card variant="borderless" className="card-learn">
              <Row gutter={[8, 16]} className="p-2">
                <Col span={8}>
                  <Card className="card-order-create">
                    <Card className="card-order-create">
                      <strong>Order ID : </strong> <span>#123456</span>
                      <br />
                      <strong>Status : </strong>
                      <Tag color="#55acee">New Order</Tag>
                    </Card>
                    <div className="mt-2 ">
                      <Card className="card-order-create-main">
                        <strong>Customer Informaion</strong>
                        <Row gutter={[8, 8]} className="pb-2">
                          <Col span={12}>
                            <span>Firstname</span>{" "}
                            <span className="text-red">*</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Firstname"
                            />
                          </Col>
                          <Col span={12}>
                            <span>Lastname</span>{" "}
                            <span className="text-red">*</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Lastname"
                            />
                          </Col>
                          <Col span={12}>
                            <span>Phone</span>{" "}
                            <span className="text-red">*</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Phone"
                            />
                          </Col>
                          <Col span={12}>
                            <span>Email</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Email"
                            />
                          </Col>
                        </Row>
                        <strong>Adress Informaion</strong>
                        <Row gutter={[8, 8]} className="pb-2">
                          <Col span={24}>
                            <span>Adress</span>
                            <span className="text-red">*</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Adress"
                            />
                          </Col>
                          <Col span={12}>
                            <span>Sub District</span>
                            <span className="text-red">*</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Sub District"
                            />
                          </Col>
                          <Col span={12}>
                            <span> District</span>
                            <span className="text-red">*</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Sub District"
                            />
                          </Col>
                          <Col span={12}>
                            <span> Province</span>
                            <span className="text-red">*</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Province"
                            />
                          </Col>
                          <Col span={12}>
                            <span> Zipcode</span>
                            <span className="text-red">*</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Zipcode"
                            />
                          </Col>
                        </Row>
                        <strong>Shiping Informaion</strong>
                        <Row gutter={[8, 8]} className="pb-2">
                          <Col span={24}>
                            <span>Payment Type</span>
                            <span className="text-red">*</span>
                            <Select
                              showSearch
                              variant="filled"
                              size="large"
                              placeholder="Payment Type"
                              style={{ width: "100%" }}
                              optionFilterProp="label"
                              options={[
                                {
                                  value: "Flash",
                                  label: "Flash",
                                },
                                {
                                  value: "Thiapost",
                                  label: "Thiapost",
                                },
                                {
                                  value: "COD",
                                  label: "COD",
                                },
                              ]}
                            />
                          </Col>
                        </Row>
                        <strong>Payment Informaion</strong>
                        <Row gutter={[8, 8]} className="pb-2">
                          <Col span={12}>
                            <span>Payment Type</span>
                            <span className="text-red">*</span>
                            <Select
                              showSearch
                              variant="filled"
                              size="large"
                              placeholder="Payment Type"
                              style={{ width: "100%" }}
                              optionFilterProp="label"
                              options={[
                                {
                                  value: "Transfer",
                                  label: "Transfer",
                                },
                                {
                                  value: "Cash",
                                  label: "Cash",
                                },
                                {
                                  value: "COD",
                                  label: "COD",
                                },
                              ]}
                            />
                          </Col>
                          <Col span={12}>
                            <span>Total</span>
                            <span className="text-red">*</span>
                            <Input
                              variant="filled"
                              size="large"
                              placeholder="Total"
                            />
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Card>
                </Col>
                <Col span={16}>
                  <Card className="card-order-create">
                    <Col span={24} className="btn-cart">
                      <Button
                        onClick={showLoading}
                        icon={<PlusCircleOutlined />}
                        className="ml-2"
                      >
                        Add Product
                      </Button>
                    </Col>
                    <Col span={24}>
                      <Row gutter={[8, 8]} className="header-order">
                        <Col span={4}>
                          <strong>Image</strong>
                        </Col>
                        <Col span={16}>
                          <strong>Detail</strong>
                        </Col>
                        <Col span={4} className="table-order ">
                          <strong>Price (฿)</strong>
                        </Col>
                      </Row>
                      <div className="product-card">
                        {items.map((item) => (
                          <Row
                            gutter={[8, 8]}
                            key={item?.key}
                            className="product-row"
                          >
                            <Col span={2}>
                              <Image src={item?.label} alt="Vercel logomark" />
                            </Col>
                            <Col span={18}>
                              <strong>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </strong>
                              <br />
                              <small>123-123-123</small>
                            </Col>
                            <Col span={4} className="table-order">
                              <span>100.00</span>
                            </Col>
                          </Row>
                        ))}
                      </div>
                      <div className="mt-8">
                        <Row gutter={[8, 8]}>
                          <Col span={12} className="amount-count-left">
                            <strong>Amount</strong>
                          </Col>
                          <Col span={12} className="amount-count">
                            <span>฿100.00</span>
                          </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                          <Col span={12} className="amount-count-left">
                            <strong>Transfer</strong>
                          </Col>
                          <Col span={12} className="amount-count">
                            <span>฿100.00</span>
                          </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                          <Col span={12} className="amount-count-left">
                            <strong>Discount</strong>
                          </Col>
                          <Col span={12} className="amount-count">
                            <span>฿100.00</span>
                          </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                          <Col span={12} className="amount-count-left">
                            <strong>VAT(7%)</strong>
                          </Col>
                          <Col span={12} className="amount-count">
                            <span>฿100.00</span>
                          </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                          <Col span={12} className="amount-count-left">
                            <strong>Total</strong>
                          </Col>
                          <Col span={12} className="amount-count">
                            <span>฿100.00</span>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
