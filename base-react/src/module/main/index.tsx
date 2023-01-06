import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

// 主菜单
const mainMenu = [
  {
    key: "/workbench/apps",
    icon: <UserOutlined />,
    label: "应用列表",
  },
  {
    key: "/workbench/system",
    icon: <LaptopOutlined />,
    label: "系统管理",
    children: [
      { key: "/workbench/system/users", label: "用户管理" },
      { key: "/workbench/system/roles", label: "角色管理" },
    ],
  },
];

function MainModule() {
  const navigator = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider width={200} style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={mainMenu}
          onClick={(e) => {
            navigator(e.key);
          }}
        />
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainModule;
