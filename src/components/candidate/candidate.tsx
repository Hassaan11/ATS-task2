import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import { ReactComponent as Icon } from "../../assets/svgs/avatar.svg";
import { CandidateComponetProps } from "../../types/types";

import "./candidate.css";

const Candidate = ({
  candidate,
  setCandidates,
  candidates,
  index,
}: CandidateComponetProps) => {
  const onChange = (e: CheckboxChangeEvent) => {
    const newData = [...candidates];
    newData[index].checked = e.target.checked;
    setCandidates(newData);
  };

  return (
    <div className="candidateComponent d-flex align-items-center">
      <Checkbox
        checked={candidate?.checked}
        onChange={onChange}
        className="candidatesText"
      />
      <div className="content">
        <Icon />
        <div className="d-flex flex-column data">
          <h4>{candidate?.name}</h4>
          <h6>{candidate?.location}</h6>
          <span>{candidate?.degree}</span>
          <div className="mt-1 d-flex">
            {candidate?.tags?.map((tag: string, index: number) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="d-flex mt-2">
            {candidate?.skills?.map((skill: string, index: number) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Candidate;
