import React, { ReactNode, useState } from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import {
  DownOutlined,
  MessageOutlined,
  ShareAltOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState("Opportunity Browsing");
  const [visible, setVisible] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: "Applied",
      key: "1745",
    },

    {
      label: "Shortlisted",
      key: "453",
    },

    {
      label: "Technical Interview",
      key: "123",
    },
    {
      label: "Opportunity Browsing",
      key: "243",
    },
    {
      label: "Video Interview I",
      key: "25",
    },
    {
      label: "Video Interview II",
      key: "25",
    },
    {
      label: "Video Interview III",
      key: "25",
    },
    {
      label: "Offer",
      key: "25",
    },
    {
      label: "Withdrawn",
      key: "25",
    },
  ];
  const handleMenuClick: MenuProps["onClick"] = (e: any) => {
    // if (e.key) setQuestion({ ...question, type: e?.domEvent.target.innerText });
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const menuProps2 = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-3 mynavbar">
      <div className="d-flex flex-column">
        <h3 className="title">London Internship Program</h3>
        <span className="text">London</span>
      </div>
      <div>
        <Dropdown
          className="mt-1 w-100 dropdown"
          visible={visible}
          menu={menuProps}
          trigger={["click"]}
          onOpenChange={() => setVisible(!visible)}
          dropdownRender={(menus: any) => {
            return (
              <>
                {menus?.props?.items?.map((m: any) => (
                  <div
                    className="p-2 d-flex justify-content-between w-100 align-items-center dropdown-btn"
                    onClick={() => {
                      setVisible(false);
                      setActiveDropdown(m?.label);
                    }}
                  >
                    <span>{m?.label}</span>
                    <span className="key">{m?.key}</span>
                  </div>
                ))}
              </>
            );
          }}
        >
          <Button
            style={{ height: "40px", border: "none", borderRadius: "20px" }}
          >
            <Space
              className="d-flex justify-content-between"
              style={{
                width: "300px",
                color: "#1D4ED8",
                fontSize: "16px",
              }}
            >
              {activeDropdown}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="d-flex align-items-center">
        <div className="circle">
          <ShareAltOutlined className="navIcon" />
        </div>
        <div className="circle">
          <UserDeleteOutlined
            className="navIcon"
            style={{ color: "#A80000" }}
          />
        </div>
        <div className="circle">
          <UserAddOutlined className="navIcon" />
        </div>
        <div className="circle">
          <UserOutlined className="navIcon" />
        </div>
        <div className="circle">
          <MessageOutlined className="navIcon" />
        </div>
        <div className="videobtn">
          <Dropdown.Button
            menu={menuProps}
            icon={<DownOutlined />}
            trigger={["click"]}
            onClick={() => console.log("abc")}
          >
            Move To Video Interview I
          </Dropdown.Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
