import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Button, Avatar, Badge } from "antd";

function UsersModule() {
  return (
    <Badge count={0}>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
  );
}

export default UsersModule;
