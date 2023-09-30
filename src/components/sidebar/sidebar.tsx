import {
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  BookOutlined,
  HeartOutlined,
  FileOutlined,
  LeftOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="d-flex flex-column justify-content-between bg-white sidebar">
      <div className="d-flex flex-column align-items-center">
        <MenuOutlined className="icon" />
        <Link to="/">
          <HomeOutlined
            className={`icon ${location.pathname === "/" && "active"}`}
          />
        </Link>
        <UsergroupAddOutlined className="icon" />
        <CalendarOutlined className="icon" />
        <ShareAltOutlined className="icon" />
        <Link to="/reports">
          <FileOutlined
            className={`icon ${location.pathname === "/reports" && "active"}`}
          />
        </Link>
        <BookOutlined className="icon" />
        <HeartOutlined className="icon" />
        <LeftOutlined className="icon" />
      </div>
      <div className="d-flex flex-column">
        <SettingOutlined className="icon2" />
        <UserOutlined style={{ fontSize: 20, marginBottom: 50 }} />
      </div>
    </div>
  );
};

export default Sidebar;
