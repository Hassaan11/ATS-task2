import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Progress } from "antd";

import Box from "../box/box";
import LineChart from "../line-chart/line-chart";
import "./job-overview.css";

const JobOverview = ({
  title,
  reportData,
  activeDropdown,
  setActiveDropdown,
}: any) => {
  const items: MenuProps["items"] = [
    {
      label: "Applied",
      key: "0",
    },
    {
      label: "Recommended",
      key: "1",
    },
    {
      label: "Interview",
      key: "2",
    },
    {
      label: "Offer",
      key: "3",
    },
    {
      label: "Hired",
      key: "4",
    },
    {
      label: "Rejected",
      key: "5",
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e: any) => {
    setActiveDropdown(e?.domEvent.target.innerText);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="job-overview">
      <h6 className="title mb-3">{title}</h6>
      <div className="d-flex">
        <div className="c1 d-flex flex-column">
          <div className="d-flex mb-3">
            {reportData?.data?.map((d: any, index: number) => {
              if (index < 3) {
                return (
                  <Box
                    name={d?.name}
                    count={d?.count}
                    prevCount={d?.prevCount}
                    rise={d?.rise}
                    percentage={d?.percentage}
                  />
                );
              } else return <></>;
            })}
          </div>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center graph-header">
              <Dropdown menu={menuProps} trigger={["click"]}>
                <Space>
                  {activeDropdown}
                  <DownOutlined />
                </Space>
              </Dropdown>
              <div className="d-flex align-items-center right">
                <span className="d-flex align-items-center">
                  <p
                    style={{
                      backgroundColor: "#FBE38E",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      margin: 0,
                      marginRight: "10px",
                    }}
                  />
                  Qualified
                </span>
                <span className="d-flex align-items-center">
                  <p
                    style={{
                      backgroundColor: "#B1A5FF",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      margin: 0,
                      marginRight: "10px",
                    }}
                  />
                  Disqualified
                </span>
              </div>
            </div>
            <LineChart data={reportData?.graphData} />
          </div>
        </div>
        <div className="c2 d-flex flex-column">
          <div className="p-4 first">
            <h5>Total Candidate Flow</h5>

            <Progress
              strokeLinecap="butt"
              percent={75}
              strokeColor="#D0F2CA"
              trailColor="#FFE0E0"
              showInfo={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobOverview;
