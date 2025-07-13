import "./skills.css";
// import { Link as RouterLink } from "react-router-dom";
import thali from "../assets/thalii.jpg";

const Skills = () => {
  return (
    <div className="skillsContainer" id="skills">
      <div className="skillsHeading">
        <h1>
          My <span className="skills-title-highlight">Skills </span>
        </h1>
      </div>
      <div className="skillsWrapper">
        <div>
          <img src={thali} alt="image.jpg" />
        </div>
        <div className="bio">
          <div className="skills">
            <button>Python</button>
            <button>R</button>
            <button>SQL</button>
            <button>Excel</button>
            <button>Tableau</button>
            <button>Power BI</button>
            <button>Data Cleaning</button>
            <button>Data Wrangling</button>
            <button>Data Preprocessing</button>
            <button>Data Transformation</button>
            <button>Data Validation</button>
            <button>Data Mining</button>
            <button>Data Ethics</button>
          </div>
          <div className="aboutP">
            <h4>My Quick Story</h4>
            <p>
              I thought coding was my thing until I realized I was way more
              interested in what the code revealed than the code itself. My{" "}
              <strong>software engineering certificate</strong> taught me to
              build things, but my math brain wanted to understand the patterns
              behind them. Enter <strong>data analytics</strong> —suddenly
              everything clicked. <strong>Python</strong> became my data
              manipulation tool, <strong>SQL</strong> my new best friend, and{" "}
              <strong>Tableau</strong> my creative outlet. Now I&apos;m the
              person who finds genuine joy in messy datasets and I&apos;m
              excited to bring this passion to real-world business challenges.
            </p>

            <a href="#about">keep reading my bio</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
