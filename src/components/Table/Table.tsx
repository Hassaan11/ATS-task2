import { Table } from "antd";
import { TableDataItem } from "../../types/types";

type companyTableProps = {
  companyRecord: TableDataItem[];
};

const CompanyTable = ({ companyRecord }: companyTableProps) => {
  const columns = [
    {
      title: "Opportunity Name",
      dataIndex: "opportunityName",
      key: "opportunityName",
      width: 200,
      render: (text: any, record: any, index: any) => {
        if (index % 3 === 0) {
          return {
            children: text,
            props: {
              rowSpan: 3,
              align: "center",
            },
          };
        } else {
          return {
            children: text,
            props: {
              rowSpan: 0,
              align: "left",
            },
          };
        }
      },
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (text: any) => {
        const isActive = text === "Active";
        const isDisqualified = text === "Disqualified";
        return (
          <span
            style={{
              background: isActive
                ? "#F2FBE9"
                : isDisqualified
                ? "#FFECEA"
                : "transparent",
              padding: "4px 10px",
              borderRadius: "20px",
              display: "inline-block",
              fontSize: isActive || isDisqualified ? "10px" : "13px",
            }}
          >
            {text}
          </span>
        );
      },
    },
    {
      title: "Applied",
      dataIndex: "Applied",
      key: "Applied",
    },
    {
      title: "Recommended",
      dataIndex: "Recommended",
      key: "Recommended",
    },
    {
      title: "Interview",
      dataIndex: "Interview",
      key: "Interview",
    },
    {
      title: "Offer",
      dataIndex: "Offer",
      key: "Offer",
    },
    {
      title: "Hired",
      dataIndex: "Hired",
      key: "Hired",
    },
  ];

  let flattenedData: any = [];

  companyRecord?.forEach((opportunity: any) => {
    const opportunityData = opportunity.data;
    const subtotal = opportunityData.reduce(
      (acc: any, item: any) => {
        for (const key in acc) {
          if (key !== "Status") {
            acc[key] += parseInt(item[key], 10);
          }
        }
        return acc;
      },
      {
        Status: "Sub - Total",
        Applied: 0,
        Recommended: 0,
        Interview: 0,
        Offer: 0,
        Hired: 0,
      }
    );

    flattenedData.push({
      opportunityName: opportunity.opportunityName,
      ...opportunityData[0],
    });
    flattenedData.push(opportunityData[1]);
    flattenedData.push({
      ...subtotal,
      key: `${opportunity.opportunityName}-subtotal`,
      background: "#F6FAFF",
    });
  });

  const components = {
    body: {
      row: (props: any) => {
        const background = props.children[0].props.record.background;
        return (
          <tr
            {...props}
            style={{
              background: background ? "#F6FAFF" : "inherit",
              fontWeight: background ? "800" : "inherit",
            }}
          />
        );
      },
    },
  };

  return (
    <Table
      dataSource={flattenedData}
      columns={columns}
      pagination={false}
      bordered
      components={components}
    />
  );
};

export default CompanyTable;
