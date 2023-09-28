import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

import "./searchbar.css";

const Searchbar = () => {
  return (
    <div>
      <div className="inputdiv">
        <Input
          className="w-100"
          size="large"
          placeholder="Serach by name, edu, exp or #tag"
          prefix={
            <SearchOutlined
              style={{
                color: "#B0BABF",
                marginRight: "10px",
                fontSize: "20px",
              }}
            />
          }
        />
        <InfoCircleOutlined className="infoIcon" />
      </div>
    </div>
  );
};

export default Searchbar;
