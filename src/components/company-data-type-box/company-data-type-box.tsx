type CompanyTypeBoxProps = {
  name: string;
  count: string;
};

const CompanyTypeBox = ({ name, count }: CompanyTypeBoxProps) => {
  return (
    <div className="p-4 box">
      <span>{name}</span>
      <h6>{count}</h6>
    </div>
  );
};
export default CompanyTypeBox;
