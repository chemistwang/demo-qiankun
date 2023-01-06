import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Button, Avatar, Badge } from "antd";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import "./index.css";
import actions from "../../qiankun/actions";
const { Header, Content, Sider } = Layout;

// 头部菜单
const headerMenu = [
  { key: "/workbench", label: "主应用" },
  { key: "/workbench/mini-react18", label: "子应用mini-react18" },
  { key: "/workbench/mini-vue2", label: "子应用mini-vue2" },
];

const WorkbenchPage: React.FC = () => {
  const navigator = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后状态; prevState: 变更前状态
      console.log("main app observer prevState: ", prevState);
      console.log("main app observer state: ", state);
    });
  }, []);

  const clickFn = () => {
    actions.setGlobalState({
      age: Math.floor(Math.random() * 100),
    });
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Header className="header">
        <Menu
          style={{ flex: 1 }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/workbench"]}
          items={headerMenu}
          onClick={(e) => {
            navigator(e.key);
          }}
        />
        <Button onClick={clickFn}>Click</Button>
        <Badge count={1}>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </Header>
      <Outlet></Outlet>
    </Layout>
  );
};

export default WorkbenchPage;
