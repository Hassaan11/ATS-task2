import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Progress } from "antd";

import Box from "../box/box";
import LineChart from "../line-chart/line-chart";

import "./job-overview.css";
import { Data1Item, ReportProps } from "../../types/types";
import { dropdownData } from "../../constants";

type JobOverviewProps = {
  title?: string;
  reportData: ReportProps;
  activeDropdown: string;
  setActiveDropdown: any;
};

const JobOverview = ({
  title = "",
  reportData,
  activeDropdown,
  setActiveDropdown,
}: JobOverviewProps) => {
  const items: MenuProps["items"] = dropdownData;
  const handleMenuClick: MenuProps["onClick"] = (e: any) => {
    setActiveDropdown(e?.domEvent.target.innerText);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="job-overview mb-5">
      <h6 className="title mb-3">{title}</h6>
      <div className="job-overview2">
        <div className="c1 d-flex flex-column">
          <div className="d-flex mb-3 boxesDiv">
            {reportData?.data1?.map((d: Data1Item, index: number) => {
              if (index < 3) {
                return (
                  <Box
                    key={index}
                    name={d?.name}
                    count={d?.count}
                    prevCount={d?.prevCount}
                    rise={d?.rise}
                    percentage={d?.percentage}
                  />
                );
              }
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
            <div style={{ height: "300px", width: "100%" }}>
              <LineChart data={reportData?.graphData} />
            </div>
          </div>
        </div>
        <div className="c2 d-flex flex-column">
          <div className="p-4 first">
            <h5 className="mb-3">Total Candidate Flow</h5>
            <h6 className="mb-4">4,567</h6>
            <Progress
              strokeLinecap="butt"
              percent={75}
              strokeColor="#D0F2CA"
              trailColor="#FFE0E0"
              showInfo={false}
            />
            <div className="d-flex progresstext">
              <span className="w-75">Qualified 78%</span>
              <span className="w-25">Disqualified 22%</span>
            </div>
            <div className="mt-4 d-flex justify-content-between align-items-center details mb-2 w-100 heading">
              <span className="w-50">Stage</span>
              <div className="w-50 d-flex justify-content-between right">
                <span className="w-50">Qualified</span>
                <span className="w-50">Disqualified</span>
              </div>
            </div>
            {reportData?.data1?.map((d: Data1Item, index: number) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center details mb-2 w-100"
              >
                <span className="w-50">{d?.name}</span>
                <div className="w-50 d-flex justify-content-between right">
                  <span className="w-50">{d?.count}</span>
                  <span className="w-50">{d?.disqualified}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex mt-3">
            {reportData?.data1?.map((d: Data1Item, index: number) => {
              if (index > 2) {
                return (
                  <div className="boxDiv1" key={index}>
                    <Box
                      changeDesign={true}
                      name={d?.name}
                      count={d?.count}
                      prevCount={d?.prevCount}
                      rise={d?.rise}
                      percentage={d?.percentage}
                    />
                  </div>
                );
              } else return <div key={index}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobOverview;
