import { DownOutlined } from "@ant-design/icons";
import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";
import moment from "moment";

import { NavbarProps } from "../../types/types";

import "./report-navbar.css";

const ReportNavbar = ({
  setStartDate,
  setEndDate,
  startDate,
  endDate,
  heading,
}: NavbarProps) => {
  const { RangePicker } = DatePicker;

  const customFormat: DatePickerProps["format"] = (value: any) =>
    `${moment(value?.$d).format("DD MMM YYYY")}`;

  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap p-4 report-navbar">
      <h3 className="title">{heading}</h3>
      <div className="d-flex align-items-center">
        <h5>
          London Internship Program{" "}
          <DownOutlined style={{ fontSize: "10px", marginLeft: "10px" }} />
        </h5>
        <div className="datePicker">
          <RangePicker
            style={{
              backgroundColor: "#F0F3FB",
              border: "none",
              borderRadius: "20px",
            }}
            defaultValue={[dayjs(startDate), dayjs(endDate)]}
            format={customFormat}
            onChange={(e: any) => {
              setStartDate(e?.[0]?.$d);
              setEndDate(e?.[1]?.$d);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportNavbar;
