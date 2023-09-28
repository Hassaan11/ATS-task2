import React, { useState } from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import FilterRow from "../../components/filter-row/filter-row";
import Navbar from "../../components/navbar/navbar";
import Searchbar from "../../components/searchbar/searchbar";
import Sidebar from "../../components/sidebar/sidebar";
import Candidate from "../../components/candidate/candidate";
import { CandidateProps, CandidatesProps } from "../../types/types";

import "./home.css";
import { FileOutlined, PlayCircleOutlined } from "@ant-design/icons";

const Home = () => {
  const [selected, setSelected] = useState([]);
  const [candidates, setCandidates] = useState<CandidatesProps>([
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
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filteredCandidates, setfilteredCandidates] =
    useState<CandidatesProps>(candidates);

  const onChange = (e: CheckboxChangeEvent) => {
    const newData = candidates.map((candidate: CandidateProps) => ({
      ...candidate,
      checked: e.target.checked,
    }));
    setCandidates([...newData]);
  };

  const onSearchChange = (e: any) => {
    let searchQuery = e.target.value;
    if (searchQuery) {
      const result = candidates.filter((candidate) => {
        const { name, location, degree, tags, skills } = candidate;

        return (
          name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          skills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      });
      setCandidates(result);
    } else {
      setCandidates(filteredCandidates);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="d-flex">
        <Sidebar />
        <div className="homecontainer d-flex-col w-100">
          <Navbar />
          <div className="px-4">
            <div className="row d-flex">
              <div className="col-md-4">
                <Searchbar onSearchChange={onSearchChange} />
                <div className="filterContainer">
                  <div className="d-flex justify-content-between filterRow">
                    <span className="title">Filters</span>
                    <span className="text">{selected.length} Selected</span>
                  </div>
                  <FilterRow
                    name="Personal Information"
                    data={["Name", "Age"]}
                    setSelected={setSelected}
                    selected={selected}
                  />
                  <FilterRow
                    name="Education"
                    data={["Resume", "Experience"]}
                    setSelected={setSelected}
                    selected={selected}
                  />
                  <FilterRow
                    name="Work Experience"
                    data={["Years"]}
                    setSelected={setSelected}
                    selected={selected}
                  />
                  <FilterRow
                    name="Activity Filter"
                    data={["Test1", "Test2"]}
                    setSelected={setSelected}
                    selected={selected}
                  />
                  <FilterRow
                    name="Advanced Filter"
                    showIcon={false}
                    data={["Test4", "Test3"]}
                    setSelected={setSelected}
                    selected={selected}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="col2 p-3">
                  <div className="d-flex justify-content-between align-items-center header flex-wrap">
                    <Checkbox onChange={onChange} className="candidatesText">
                      <span style={{ marginLeft: "20px" }}>
                        {candidates.length} Candidates
                      </span>
                    </Checkbox>
                    <div className="rightSide">
                      <span className="blue">Qualified</span>
                      <span>
                        Task <b className="label">2</b>
                      </span>
                      <span>
                        Disqualified <b className="label">4</b>
                      </span>
                    </div>
                  </div>

                  {candidates?.map(
                    (candidate: CandidateProps, index: number) => (
                      <Candidate
                        key={index}
                        candidate={candidate}
                        setCandidates={setCandidates}
                        candidates={candidates}
                        index={index}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomDiv">
          <p>
            <PlayCircleOutlined /> 4
          </p>
          <p>
            <FileOutlined /> 5 Programs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
