import { FallOutlined, RiseOutlined } from "@ant-design/icons";

type BoxProps = {
  name: string;
  count: string;
  prevCount: string;
  rise: boolean;
  percentage: string;
};

const Box = ({ name, count, prevCount, rise, percentage }: any) => {
  return (
    <div className="p-4 box">
      <h5>{name}</h5>
      <h6>{count}</h6>
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
