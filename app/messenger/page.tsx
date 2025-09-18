import React from "react";
import {
  Card,
  Col,
  Row,
  Avatar,
  Image,
  Badge,
  Button,
  Tag,
  Divider,
  Input,
  Space,
} from "antd";
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
  TwitterOutlined,
  YoutubeOutlined,
  SettingOutlined,
  SendOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];
type MenuItem2 = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
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
];
const App: React.FC = () => (
  <div>
    <div className="mr-4 mt-4">
      <Row gutter={[4, 4]} className="pb-4">
        <Col span={6}>
          <Card variant="borderless" className="card-messenger-left">
            <strong>Chats</strong>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card className="card-chat">
                  <Row>
                    <Col span={5}>
                      <Avatar
                        size={46}
                        src="https://image.springnews.co.th/uploads/images/contents/w1024/2024/11/5xN8L1lbxnH3Sk1nm6Wp.webp?x-image-process=style/lg-webp"
                      />
                    </Col>
                    <Col span={14}>
                      <div className="text-dot">
                        <strong className="">
                          Nontawat Wichapha (นนทวัฒน์ วิชาผา)
                        </strong>
                      </div>
                      <div className="text-dot">
                        <small className="text-small">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Rem obcaecati eum, in totam natus exercitationem
                          ducimus dolorem. Distinctio tempore non laudantium
                          animi? Non saepe laboriosam architecto exercitationem
                          placeat consectetur iste.
                        </small>
                      </div>
                    </Col>
                    <Col span={5} className="badge-text">
                      <small className="text-small">7:54 PM</small>
                      <br />
                      <Badge size="small" count={5}></Badge>
                    </Col>
                  </Row>
                </Card>
                {items.map((item) => (
                  <Card className="card-chat-two" key={item?.key}>
                    <Row>
                      <Col span={5}>
                        <Avatar size={46} src={item?.label} />
                      </Col>
                      <Col span={14}>
                        <div className="text-dot">
                          <strong className="">
                            Nontawat Wichapha (นนทวัฒน์ วิชาผา)
                          </strong>
                        </div>
                        <div className="text-dot">
                          <small className="text-small">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Rem obcaecati eum, in totam natus
                            exercitationem ducimus dolorem. Distinctio tempore
                            non laudantium animi? Non saepe laboriosam
                            architecto exercitationem placeat consectetur iste.
                          </small>
                        </div>
                      </Col>
                      <Col span={5} className="badge-text">
                        <small className="text-small">7:54 PM</small>
                        <br />
                        <Badge size="small" count={5}></Badge>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={18}>
          <Card variant="borderless" className="card-messenger">
            <Row>
              <Col span={2}>
                <Avatar
                  size={46}
                  src="https://image.springnews.co.th/uploads/images/contents/w1024/2024/11/5xN8L1lbxnH3Sk1nm6Wp.webp?x-image-process=style/lg-webp"
                />
              </Col>
              <Col span={22}>
                <strong className="">
                  Nontawat Wichapha (นนทวัฒน์ วิชาผา)
                </strong>
                <br />
                <Tag icon={<TwitterOutlined />} color="#55acee">
                  Twitter
                </Tag>
                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                  Youtube
                </Tag>
              </Col>
            </Row>
            <Divider orientation="left"></Divider>
            <Card className="card-messenger-chat">
              <Row gutter={[4, 4]}>
                <Col span={24}>
                  <Row gutter={[4, 4]}>
                    <Col span={1}>
                      <Avatar
                        size={34}
                        src="https://image.springnews.co.th/uploads/images/contents/w1024/2024/11/5xN8L1lbxnH3Sk1nm6Wp.webp?x-image-process=style/lg-webp"
                      />
                    </Col>
                    <Col span={23}>
                      {items.map((item) => (
                        <div key={item?.key}>
                          <Tag color="#f1f1f1ff" className="tag-chat">
                            <span className="text-small">{item?.text}</span>
                          </Tag>
                        </div>
                      ))}
                    </Col>
                  </Row>
                </Col>
                <Col span={24} className="p-0">
                  <Row gutter={[2, 2]} >
                    <Col span={23} className="p-right">
                      {items.map((item) => (
                        <div key={item?.key}>
                          <Tag color="#dce7ff" className="tag-chat">
                            <span className="text-small">{item?.text}</span>
                          </Tag>
                        </div>
                      ))}
                    </Col>
                    <Col span={1} className="p-right">
                      <Avatar
                        size={34}
                        src="https://image.springnews.co.th/uploads/images/contents/w1024/2024/11/5xN8L1lbxnH3Sk1nm6Wp.webp?x-image-process=style/lg-webp"
                      />
                    </Col>
                  </Row>
                </Col>{" "}
              </Row>
            </Card>
            <Divider orientation="left"></Divider>
            <Input
              addonAfter={<SendOutlined />}
              variant="filled"
              size="large"
              placeholder="Nontawat Wichapha (นนทวัฒน์ วิชาผา)"
            />
          </Card>
        </Col>
      </Row>
    </div>
  </div>
);

export default App;
