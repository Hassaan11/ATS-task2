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

export type CandidateComponetProps = {
  candidate: CandidateProps;
  setCandidates: any;
  candidates: CandidatesProps;
  index: number;
};
