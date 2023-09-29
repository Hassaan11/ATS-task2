import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import ReportNavbar from "../../components/report-navbar/report-navbar";
import Sidebar from "../../components/sidebar/sidebar";

import "./reports.css";
import JobOverview from "../../components/job-overview/job-overview";

const Reports = () => {
  const [startDate, setStartDate] = useState("01/01/2023");
  const [endDate, setEndDate] = useState("06/30/2023");
  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ]);

  const [reports, setReports] = useState({
    overAllReport: {
      data: [
        {
          name: "Applied",
          count: "3,122",
          prevCount: "1590",
          rise: true,
          percentage: "15%",
          disqualified: "1,445",
        },
        {
          name: "Offer",
          count: "183",
          prevCount: "71",
          rise: true,
          percentage: "15%",
          disqualified: "260",
        },
        {
          name: "Hired",
          count: "98",
          prevCount: "167",
          rise: false,
          percentage: "15%",
          disqualified: "65",
        },
        {
          name: "Recommended",
          count: "2,164",
          prevCount: "90",
          rise: true,
          percentage: "15%",
          disqualified: "958",
        },
        {
          name: "Interview",
          count: "443",
          prevCount: "90",
          rise: true,
          percentage: "15%",
          disqualified: "1721",
        },
      ],
      graphData: {
        labels,
        datasets: [
          {
            label: "Qualified",
            data: labels.map(() => faker.number.int({ min: 250, max: 750 })),
            borderColor: "#FBE38E",
            backgroundColor: "#FBE38E",
          },
          {
            label: "Disqualified",
            data: labels.map(() => faker.number.int({ min: 250, max: 750 })),
            borderColor: "#9A89FF",
            backgroundColor: "#9A89FF",
          },
        ],
      },
    },
  });

  const [activeDropdown, setActiveDropdown] = useState("Recommended");

  function getMonthsBetweenDates(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const months = [];

    while (start <= end) {
      const month = start.toLocaleString("en-US", { month: "long" });

      months.push(month);

      start.setMonth(start.getMonth() + 1);
    }

    return months;
  }

  useEffect(() => {
    const monthsArray = getMonthsBetweenDates(startDate, endDate);
    setLabels(monthsArray);
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
  }, [startDate, endDate, activeDropdown]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="reportcontainer d-flex-col w-100">
        <ReportNavbar
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          startDate={startDate}
          endDate={endDate}
        />

        <div className="px-4">
          <JobOverview
            title="test"
            reportData={reports?.overAllReport}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        </div>
      </div>
    </div>
  );
};
export default Reports;
