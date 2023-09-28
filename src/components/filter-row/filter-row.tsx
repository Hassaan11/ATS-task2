import { FileOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { FilterRowProps } from "../../types/types";

const FilterRow = ({
  name,
  showIcon = true,
  data,
  setSelected,
  selected,
}: FilterRowProps) => {
  const [show, setShow] = useState(false);

  const onChange = (filter: string) => (e: CheckboxChangeEvent) => {
    const newData = [...selected];
    if (!e.target.checked) {
      const result = newData.filter((d) => d !== filter);
      setSelected(result);
    } else if (e.target.checked) {
      newData.push(filter);
      setSelected(newData);
    }
  };
  return (
    <div className="filterRow pointer">
      <div
        className="d-flex justify-content-between"
        onClick={() => setShow(!show)}
      >
        <span className="title">
          <FileOutlined style={{ marginRight: "10px" }} /> {name}
        </span>
        {showIcon &&
          (show ? (
            <UpOutlined
              style={{
                color: "#1D4ED8",
                fontSize: "10px",
                marginRight: "10px",
              }}
            />
          ) : (
            <DownOutlined
              style={{
                color: "#1D4ED8",
                fontSize: "10px",
                marginRight: "10px",
              }}
            />
          ))}
      </div>
      {show &&
        data?.map((filter: string, index: number) => (
          <div key={index} className={`open-animation mt-1`}>
            <Checkbox onChange={(e) => onChange(filter)(e)}>{filter}</Checkbox>
          </div>
        ))}
    </div>
  );
};
export default FilterRow;
