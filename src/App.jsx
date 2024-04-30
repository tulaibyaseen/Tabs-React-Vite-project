import { useState } from "react";
import { useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./App.css";

const url = "https://www.course-api.com/react-tabs-project";
// const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchData = async () => {
    const response = await fetch(url);
    const info = await response.json();
    setJobs(info);
    setLoading(false);
  };
  // console.log(jobs);
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading....</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experince</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  className={`job-btn ${index === value && "active-btn"}`}
                  key={item.id}
                  onClick={() => setValue(index)}
                >
                  {item.company}{" "}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight className="job-icon" />

                  <p> {duty} </p>
                </div>
              );
            })}
            <button className="job-btn ">More Info</button>
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
