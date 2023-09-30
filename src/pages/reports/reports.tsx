import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import ReportNavbar from "../../components/report-navbar/report-navbar";
import Sidebar from "../../components/sidebar/sidebar";
import JobOverview from "../../components/job-overview/job-overview";
import CompanyData from "../../components/company-data/company-data";

import { company, overallReports } from "../../constants";
import {
  CompanyProps,
  DataItem,
  TableDataItem,
  overallReportsProps,
} from "../../types/types";

import "./reports.css";

type optionProps = {
  name: string;
  type: string;
};

const Reports = () => {
  const [showDetails, setShowDetails] = useState({
    show: false,
    heading: "",
  });
  const [startDate, setStartDate] = useState("01/01/2023");
  const [endDate, setEndDate] = useState("06/30/2023");
  const [reports, setReports] = useState(overallReports);
  const [companiesData, setCompaniesData] = useState(company);
  const [activeDropdown, setActiveDropdown] = useState("Recommended");

  const getMonthsBetweenDates = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const months = [];

    while (start <= end) {
      const month = start.toLocaleString("en-US", { month: "long" });
      months.push(month);
      start.setMonth(start.getMonth() + 1);
    }

    return months;
  };

  const sortData = (option: optionProps) => {
    companiesData.forEach((companyData: CompanyProps) => {
      const companyName = Object.keys(companyData)[0];
      const opportunities = companyData[companyName].tableData;

      opportunities.forEach((opportunity: TableDataItem) => {
        opportunity.data.sort((a: DataItem, b: DataItem) => {
          console.log("a", a);
          return option?.type === "asc"
            ? parseInt(a[option.name as keyof DataItem], 10) -
                parseInt(b[option.name as keyof DataItem], 10)
            : parseInt(b[option.name as keyof DataItem], 10) -
                parseInt(a[option.name as keyof DataItem], 10);
        });
      });
    });

    setCompaniesData(companiesData);
  };

  useEffect(() => {
    const monthsArray = getMonthsBetweenDates(startDate, endDate);
    setReports({
      ...reports,
      overAllReport: {
        ...reports.overAllReport,
        graphData: {
          labels: monthsArray,
          datasets: [
            {
              label: "Qualified",
              data: monthsArray.map(() =>
                faker.number.int({ min: 250, max: 750 })
              ),
              borderColor: "#FBE38E",
              backgroundColor: "#FBE38E",
            },
            {
              label: "Disqualified",
              data: monthsArray.map(() =>
                faker.number.int({ min: 250, max: 750 })
              ),
              borderColor: "#9A89FF",
              backgroundColor: "#9A89FF",
            },
          ],
        },
      },
    });

    const newData = [...companiesData];
    newData[0].Google.tableData[0].graphData = {
      labels: monthsArray,
      datasets: [
        {
          label: "Qualified",
          data: monthsArray.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#FBE38E",
          backgroundColor: "#FBE38E",
        },
        {
          label: "Disqualified",
          data: monthsArray.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#9A89FF",
          backgroundColor: "#9A89FF",
        },
      ],
    };
    newData[0].Google.tableData[1].graphData = {
      labels: monthsArray,
      datasets: [
        {
          label: "Qualified",
          data: monthsArray.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#FBE38E",
          backgroundColor: "#FBE38E",
        },
        {
          label: "Disqualified",
          data: monthsArray.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#9A89FF",
          backgroundColor: "#9A89FF",
        },
      ],
    };
    newData[1].Microsoft.tableData[0].graphData = {
      labels: monthsArray,
      datasets: [
        {
          label: "Qualified",
          data: monthsArray.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#FBE38E",
          backgroundColor: "#FBE38E",
        },
        {
          label: "Disqualified",
          data: monthsArray.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#9A89FF",
          backgroundColor: "#9A89FF",
        },
      ],
    };
    newData[1].Microsoft.tableData[1].graphData = {
      labels: monthsArray,
      datasets: [
        {
          label: "Qualified",
          data: monthsArray.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#FBE38E",
          backgroundColor: "#FBE38E",
        },
        {
          label: "Disqualified",
          data: monthsArray.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#9A89FF",
          backgroundColor: "#9A89FF",
        },
      ],
    };
    setCompaniesData([...newData]);
  }, [startDate, endDate, activeDropdown, showDetails]);

  const filterData = (title: string) => {
    let arr: any = [];
    companiesData.forEach((companyData: CompanyProps) => {
      const companyName = Object.keys(companyData)[0];
      if (companyName === title) {
        return arr.push(companyData[companyName]);
      }
    });
    return arr;
  };

  return (
    <div className="d-flex">
      <Sidebar />
      {showDetails?.show ? (
        <>
          <div className="reportcontainer d-flex-col w-100">
            <ReportNavbar
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              startDate={startDate}
              endDate={endDate}
              heading={`Program Overview - ${showDetails?.heading}`}
            />
            {filterData(showDetails.heading)?.[0]?.tableData.map(
              (d: TableDataItem, index: number) => (
                <div className="px-4" key={index}>
                  <JobOverview
                    title={d.opportunityName}
                    reportData={d}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                  />
                </div>
              )
            )}
          </div>
        </>
      ) : (
        <div className="reportcontainer d-flex-col w-100">
          <ReportNavbar
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
            heading="Opportunity Overview"
          />

          <div className="px-4">
            <JobOverview
              reportData={reports?.overAllReport}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
            <CompanyData
              companyRecord={companiesData}
              onSortChange={sortData}
              setShowDetails={setShowDetails}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Reports;
