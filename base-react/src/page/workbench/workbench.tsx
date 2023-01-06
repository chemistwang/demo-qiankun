import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

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

  return (
    <Layout style={{ height: "100%" }}>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/workbench"]}
          items={headerMenu}
          onClick={(e) => {
            navigator(e.key);
          }}
        />
      </Header>
      <Outlet></Outlet>
    </Layout>
  );
};

export default WorkbenchPage;
