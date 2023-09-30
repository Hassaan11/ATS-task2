export type CandidateProps = {
  name: string;
  location: string;
  degree: string;
  tags: string[];
  skills: string[];
  checked: boolean;
};

export type CandidatesProps = CandidateProps[];

export type FilterRowProps = {
  name: string;
  showIcon?: boolean;
  data?: string[];
  setSelected: any;
  selected: string[];
};

export type CandidateComponentProps = {
  candidate: CandidateProps;
  setCandidates: any;
  candidates: CandidatesProps;
  index: number;
};

export type NavbarProps = {
  setStartDate: any;
  setEndDate: any;
  startDate: string;
  endDate: string;
  heading: string;
};

// export type CompanyProps = {
//   Google: {
//     tableData: {
//       opportunityName: string;
//       data: {
//         Status: string;
//         Applied: string;
//         Recommended: string;
//         Interview: string;
//         Offer: string;
//         Hired: string;
//       }[];
//       data1: {
//         name: string;
//         count: string;
//         prevCount: string;
//         rise: boolean;
//         percentage: string;
//         disqualified: string;
//       }[];
//       graphData: {
//         labels: string[];
//         datasets: {
//           label: string;
//           data: number[];
//           borderColor: string;
//           backgroundColor: string;
//         }[];
//       };
//     }[];
//     completeData: {
//       type: string;
//       count: string;
//     }[];
//   };
//   Microsoft: {
//     tableData: {
//       opportunityName: string;
//       data: {
//         Status: string;
//         Applied: string;
//         Recommended: string;
//         Interview: string;
//         Offer: string;
//         Hired: string;
//       }[];
//       data1: {
//         name: string;
//         count: string;
//         prevCount: string;
//         rise: boolean;
//         percentage: string;
//         disqualified: string;
//       }[];
//       graphData: {
//         labels: string[];
//         datasets: {
//           label: string;
//           data: number[];
//           borderColor: string;
//           backgroundColor: string;
//         }[];
//       };
//     }[];
//     completeData: {
//       type: string;
//       count: string;
//     }[];
//   };
// }[];

export interface DataItem {
  Status: string;
  Applied: string;
  Recommended: string;
  Interview: string;
  Offer: string;
  Hired: string;
}

export interface Data1Item {
  name: string;
  count: string;
  prevCount: string;
  rise: boolean;
  percentage: string;
  disqualified: string;
}

export interface GraphData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

export interface TableDataItem {
  opportunityName: string;
  data: DataItem[];
  data1: Data1Item[];
  graphData: GraphData;
}

export interface CompleteDataItem {
  type: string;
  count: string;
}

export interface CompanyDataItem {
  tableData: TableDataItem[];
  completeData: CompleteDataItem[];
}

export interface CompanyProps {
  [key: string]: CompanyDataItem;
}

export type BoxProps = {
  name: string;
  count: string;
  prevCount: string;
  rise: boolean;
  percentage: string;
  changeDesign?: boolean;
};

export type CompanyDataProps = {
  companyRecord: CompanyProps[];
  onSortChange: any;
  setShowDetails: any;
};

export type ReportProps = { data1: Data1Item[]; graphData: GraphData };

export type overallReportsProps = {
  overAllReport: ReportProps;
};
