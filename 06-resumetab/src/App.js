import React, { useState, useEffect } from "react";
import Job from "./Job";
// import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobList, setJobList] = useState([]);
  const [type, setType] = useState("");
  const [index, setIndex] = useState(0);

  const getJobs = async () => {
    const res = await fetch(url);
    const jobs = await res.json();
    setLoading(false);
    setJobList(jobs);
  };

  useEffect(() => {
    getJobs();
  }, []);

  console.log(jobList);
  if (loading == true) {
    return <h1>Loading ...</h1>;
  }

  const handleActive = (company, index) => {
    setType(company);
    setIndex(index);
  };

  return (
    <main>
      <div className="title">
        <h2>Experience</h2>
        <div className="underLine"></div>
      </div>

      <div className="button">
        {jobList.map((job, index) => (
          <button
            key={job.id}
            onClick={() => handleActive(job.company, index)}
            style={type === job.company ? { color: "red" } : {}}
          >
            {job.company}
          </button>
        ))}
      </div>
      <Job job={jobList[index]} />
    </main>
  );
}

export default App;
