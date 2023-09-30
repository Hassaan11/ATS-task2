import { useState } from "react";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
  PieChartOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

import CompanyTypeBox from "../company-data-type-box/company-data-type-box";
import CompanyTable from "../Table/Table";
import Searchbar from "../searchbar/searchbar";

import {
  CompanyDataProps,
  CompanyProps,
  CompleteDataItem,
  TableDataItem,
} from "../../types/types";

import "./company-data.css";

const CompanyData = ({
  companyRecord,
  onSortChange,
  setShowDetails,
}: CompanyDataProps) => {
  const [activeSort, setActiveSort] = useState({
    name: "Recommended",
    type: "desc",
  });

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
  ];

  const handleMenuClick: MenuProps["onClick"] = (e: any) => {
    setActiveSort({ ...activeSort, name: e?.domEvent.target.innerText });
    onSortChange({
      name: e?.domEvent.target.innerText,
      type: activeSort.type,
    });
  };
  const sortProps = {
    items,
    onClick: handleMenuClick,
  };

  const sortChange = (type: string) => {
    setActiveSort({ ...activeSort, type: type });
    onSortChange({
      name: activeSort.name,
      type: type,
    });
  };

  const convertToCSV = (data: CompanyProps[]) => {
    const header = Object.keys(data[0]);
    const rows = data?.map((company) => {
      const companyData = company[Object.keys(company)[0]];
      console.log("companyData", companyData);
      const tableData = companyData?.tableData;
      console.log("companyData", companyData);
      // Iterate over tableData and extract opportunityName
      const opportunityNames = tableData?.map((item) => item.opportunityName);

      // Iterate over tableData and convert each item to CSV row
      const companyRows = tableData?.map((item) => {
        const rowData = [
          item?.opportunityName,
          ...item.data.map((statusData) => Object.values(statusData)),
          ...item.data1.map((data1Item) => Object.values(data1Item)),
        ];
        return rowData.join(",");
      });
      if (opportunityNames)
        return [
          Object.keys(company)[0],
          ...opportunityNames,
          ...companyRows,
        ].join("\n");
    });

    return [header.join(","), ...rows].join("\n");
  };

  const downloadCSV = () => {
    const csvData = convertToCSV(companyRecord);
    const blob = new Blob([csvData], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="company-data">
      <h6 style={{ fontSize: "16px", marginTop: "20px" }}>
        Detailed Opportunity Overview
      </h6>
      <div className="my-3 company-data2">
        <div className="c1 d-flex flex-column">
          <Searchbar />
        </div>
        <div className="d-flex c2">
          <div className="dropdownContainer1 p-2">
            <Dropdown menu={sortProps} trigger={["click"]}>
              <Space style={{ flexGrow: 1 }}>{activeSort.name}</Space>
            </Dropdown>
            {activeSort.type === "desc" ? (
              <SortAscendingOutlined
                onClick={() => sortChange("asc")}
                style={{ borderLeft: "1px solid #EEEEEE", paddingLeft: "10px" }}
              />
            ) : (
              <SortDescendingOutlined
                onClick={() => sortChange("desc")}
                style={{ borderLeft: "1px solid #EEEEEE", paddingLeft: "10px" }}
              />
            )}
          </div>
          <button className="exportBtn" onClick={downloadCSV}>
            Export All As CSV
          </button>
        </div>
      </div>

      {companyRecord?.map((company: CompanyProps, index: number) => {
        return (
          <div key={index} className="p-4 company-details mt-4">
            <div className="d-flex justify-content-between mb-4">
              <h6>{Object.keys(company)[0]}</h6>
              <div>
                <PieChartOutlined
                  className="icon"
                  onClick={() =>
                    setShowDetails({
                      heading: Object.keys(company)[0],
                      show: true,
                    })
                  }
                />
                <CloudDownloadOutlined className="icon" />
              </div>
            </div>

            <div className="mb-4 d-flex flex-wrap">
              {company[Object.keys(company)[0]]?.completeData?.map(
                (d: CompleteDataItem, index: number) => (
                  <CompanyTypeBox key={index} name={d.type} count={d.count} />
                )
              )}
            </div>

            <CompanyTable
              companyRecord={company[Object.keys(company)[0]]?.tableData}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyData;
