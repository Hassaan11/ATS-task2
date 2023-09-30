import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import { BoxProps } from "../../types/types";

const Box = ({
  name,
  count,
  prevCount,
  rise,
  percentage,
  changeDesign = false,
}: BoxProps) => {
  return (
    <div className="p-4 box">
      {changeDesign ? (
        <div className="d-flex justify-content-between align-items-center">
          <h5>{name}</h5>
          <h6>{count}</h6>
        </div>
      ) : (
        <>
          <h5>{name}</h5>
          <h6>{count}</h6>
        </>
      )}
      <span className="prevPeriod mb-2">Previous Period</span>
      <div className="d-flex align-items-center">
        <span className="prevPeriod">{prevCount}</span>
        <span className="percentage">
          {rise ? (
            <RiseOutlined style={{ marginRight: "5px" }} />
          ) : (
            <FallOutlined style={{ marginRight: "5px" }} />
          )}
          {percentage}
        </span>
      </div>
    </div>
  );
};
export default Box;
