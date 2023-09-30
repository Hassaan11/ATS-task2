import { faker } from "@faker-js/faker";
import { CompanyProps, overallReportsProps } from "../types/types";

export const label = ["January", "February", "March", "April", "May", "June"];

export const overallReports: overallReportsProps = {
  overAllReport: {
    data1: [
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
      labels: label,
      datasets: [
        {
          label: "Qualified",
          data: label.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#FBE38E",
          backgroundColor: "#FBE38E",
        },
        {
          label: "Disqualified",
          data: label.map(() => faker.number.int({ min: 250, max: 750 })),
          borderColor: "#9A89FF",
          backgroundColor: "#9A89FF",
        },
      ],
    },
  },
};

export const company: CompanyProps[] = [
  {
    Google: {
      tableData: [
        {
          opportunityName: "UX Internship",
          data: [
            {
              Status: "Active",
              Applied: "20",
              Recommended: "17",
              Interview: "4",
              Offer: "3",
              Hired: "1",
            },
            {
              Status: "Disqualified",
              Applied: "7",
              Recommended: "4",
              Interview: "1",
              Offer: "1",
              Hired: "1",
            },
          ],
          data1: [
            {
              name: "Applied",
              count: "27",
              prevCount: "15",
              rise: true,
              percentage: "15%",
              disqualified: "7",
            },
            {
              name: "Offer",
              count: "3",
              prevCount: "7",
              rise: true,
              percentage: "3%",
              disqualified: "1",
            },
            {
              name: "Hired",
              count: "1",
              prevCount: "1",
              rise: false,
              percentage: "1%",
              disqualified: "1",
            },
            {
              name: "Recommended",
              count: "17",
              prevCount: "4",
              rise: true,
              percentage: "15%",
              disqualified: "4",
            },
            {
              name: "Interview",
              count: "4",
              prevCount: "10",
              rise: false,
              percentage: "4%",
              disqualified: "1",
            },
          ],
          graphData: {
            labels: label,
            datasets: [
              {
                label: "Qualified",
                data: label.map(() => faker.number.int({ min: 250, max: 750 })),
                borderColor: "#FBE38E",
                backgroundColor: "#FBE38E",
              },
              {
                label: "Disqualified",
                data: label.map(() => faker.number.int({ min: 250, max: 750 })),
                borderColor: "#9A89FF",
                backgroundColor: "#9A89FF",
              },
            ],
          },
        },
        {
          opportunityName: "Art Internship",
          data: [
            {
              Status: "Active",
              Applied: "44",
              Recommended: "32",
              Interview: "21",
              Offer: "19",
              Hired: "10",
            },
            {
              Status: "Disqualified",
              Applied: "24",
              Recommended: "4",
              Interview: "7",
              Offer: "8",
              Hired: "3",
            },
          ],
          data1: [
            {
              name: "Applied",
              count: "44",
              prevCount: "15",
              rise: true,
              percentage: "15%",
              disqualified: "24",
            },
            {
              name: "Offer",
              count: "19",
              prevCount: "7",
              rise: true,
              percentage: "3%",
              disqualified: "8",
            },
            {
              name: "Hired",
              count: "10",
              prevCount: "1",
              rise: false,
              percentage: "1%",
              disqualified: "3",
            },
            {
              name: "Recommended",
              count: "32",
              prevCount: "4",
              rise: true,
              percentage: "15%",
              disqualified: "4",
            },
            {
              name: "Interview",
              count: "21",
              prevCount: "30",
              rise: false,
              percentage: "4%",
              disqualified: "7",
            },
          ],
          graphData: {
            labels: label,
            datasets: [
              {
                label: "Qualified",
                data: label.map(() => faker.number.int({ min: 250, max: 750 })),
                borderColor: "#FBE38E",
                backgroundColor: "#FBE38E",
              },
              {
                label: "Disqualified",
                data: label.map(() => faker.number.int({ min: 250, max: 750 })),
                borderColor: "#9A89FF",
                backgroundColor: "#9A89FF",
              },
            ],
          },
        },
      ],
      completeData: [
        {
          type: "Applied",
          count: "95",
        },
        {
          type: "Recommended",
          count: "57",
        },
        {
          type: "Interview",
          count: "39",
        },
        {
          type: "Offer",
          count: "33",
        },
        {
          type: "Hired",
          count: "15",
        },
        {
          type: "Total Rejected",
          count: "60",
        },
      ],
    },
  },
  {
    Microsoft: {
      tableData: [
        {
          opportunityName: "UX Internship",
          data: [
            {
              Status: "Active",
              Applied: "20",
              Recommended: "17",
              Interview: "4",
              Offer: "3",
              Hired: "1",
            },
            {
              Status: "Disqualified",
              Applied: "7",
              Recommended: "4",
              Interview: "1",
              Offer: "1",
              Hired: "1",
            },
          ],
          data1: [
            {
              name: "Applied",
              count: "20",
              prevCount: "15",
              rise: true,
              percentage: "15%",
              disqualified: "7",
            },
            {
              name: "Offer",
              count: "3",
              prevCount: "7",
              rise: false,
              percentage: "3%",
              disqualified: "1",
            },
            {
              name: "Hired",
              count: "1",
              prevCount: "2",
              rise: false,
              percentage: "1%",
              disqualified: "1",
            },
            {
              name: "Recommended",
              count: "17",
              prevCount: "4",
              rise: true,
              percentage: "15%",
              disqualified: "1",
            },
            {
              name: "Interview",
              count: "4",
              prevCount: "10",
              rise: false,
              percentage: "4%",
              disqualified: "1",
            },
          ],
          graphData: {
            labels: label,
            datasets: [
              {
                label: "Qualified",
                data: label.map(() => faker.number.int({ min: 250, max: 750 })),
                borderColor: "#FBE38E",
                backgroundColor: "#FBE38E",
              },
              {
                label: "Disqualified",
                data: label.map(() => faker.number.int({ min: 250, max: 750 })),
                borderColor: "#9A89FF",
                backgroundColor: "#9A89FF",
              },
            ],
          },
        },
        {
          opportunityName: "Art Internship",
          data: [
            {
              Status: "Active",
              Applied: "20",
              Recommended: "17",
              Interview: "4",
              Offer: "3",
              Hired: "1",
            },
            {
              Status: "Disqualified",
              Applied: "7",
              Recommended: "4",
              Interview: "1",
              Offer: "1",
              Hired: "1",
            },
          ],
          data1: [
            {
              name: "Applied",
              count: "20",
              prevCount: "15",
              rise: true,
              percentage: "15%",
              disqualified: "7",
            },
            {
              name: "Offer",
              count: "3",
              prevCount: "7",
              rise: false,
              percentage: "3%",
              disqualified: "1",
            },
            {
              name: "Hired",
              count: "1",
              prevCount: "2",
              rise: false,
              percentage: "1%",
              disqualified: "1",
            },
            {
              name: "Recommended",
              count: "17",
              prevCount: "4",
              rise: true,
              percentage: "15%",
              disqualified: "1",
            },
            {
              name: "Interview",
              count: "4",
              prevCount: "10",
              rise: false,
              percentage: "4%",
              disqualified: "1",
            },
          ],
          graphData: {
            labels: label,
            datasets: [
              {
                label: "Qualified",
                data: label.map(() => faker.number.int({ min: 250, max: 750 })),
                borderColor: "#FBE38E",
                backgroundColor: "#FBE38E",
              },
              {
                label: "Disqualified",
                data: label.map(() => faker.number.int({ min: 250, max: 750 })),
                borderColor: "#9A89FF",
                backgroundColor: "#9A89FF",
              },
            ],
          },
        },
      ],
      completeData: [
        {
          type: "Applied",
          count: "54",
        },
        {
          type: "Recommended",
          count: "42",
        },
        {
          type: "Interview",
          count: "22",
        },
        {
          type: "Offer",
          count: "12",
        },
        {
          type: "Hired",
          count: "4",
        },
        {
          type: "Total Rejected",
          count: "19",
        },
      ],
    },
  },
];

export const candidate = [
  {
    name: "Aaliyah Sanderson",
    location: "Riyadh, Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["#top_candidate", "#top_candidate"],
    skills: ["New York", "Marketing", "London"],
    checked: false,
  },
  {
    name: "John Doe",
    location: "Bostom, USA",
    degree: "Bachelor - MIT (2023 - 2023)",
    tags: ["#top_candidate", "#top_candidate"],
    skills: ["New York", "Marketing", "London"],
    checked: false,
  },
  {
    name: "Thomas Matt",
    location: "Edinburgh, UK",
    degree: "Bachelor - Harvard University (2023 - 2023)",
    tags: ["#top_candidate", "#top_candidate"],
    skills: ["New York", "Marketing", "London"],
    checked: false,
  },
  {
    name: "Kamilia Smith",
    location: "London, UK",
    degree: "Bachelor - Boston University (2023 - 2023)",
    tags: ["#top_candidate", "#top_candidate"],
    skills: ["New York", "Marketing", "London"],
    checked: false,
  },
  {
    name: "Roy Jade",
    location: "Cambridge,  UK",
    degree: "Bachelor - Yale (2023 - 2023)",
    tags: ["#top_candidate", "#top_candidate"],
    skills: ["New York", "Marketing", "London"],
    checked: false,
  },
  {
    name: "Ahmed Salman",
    location: "New York, USA",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    tags: ["#top_candidate", "#top_candidate"],
    skills: ["New York", "Marketing", "London"],
    checked: false,
  },
];

export const dropdownData = [
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
  {
    label: "Rejected",
    key: "5",
  },
];
