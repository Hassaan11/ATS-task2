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
import { useState } from "react";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column justify-content-between sidebar bg-white">
      <div className="d-flex flex-column align-items-center">
        <MenuOutlined className="icon" />
        <HomeOutlined className="icon active" />
        <UsergroupAddOutlined className="icon" />
        <CalendarOutlined className="icon" />
        <ShareAltOutlined className="icon" />
        <FileOutlined className="icon" />
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
