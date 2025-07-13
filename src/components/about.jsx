import "./about.css";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container" id="about">
      <div className="about-section">
        <div className="about-p">
          <h1>My Journey Into The World Of Data</h1>

          <h4>My Quick Story</h4>
          <p>
            I thought coding was my thing until I realized I was way more
            interested in what the code revealed than the code itself. My{" "}
            <strong>software engineering certificate</strong> taught me to build
            things, but my math brain wanted to understand the patterns behind
            them. Enter <strong>data analytics</strong> —suddenly everything
            clicked. <strong>Python</strong> became my data manipulation tool,{" "}
            <strong>SQL</strong> my new best friend, and{" "}
            <strong>Tableau</strong> my creative outlet. Now I&apos;m the person
            who finds genuine joy in messy datasets and I&apos;m excited to
            bring this passion to real-world business challenges.
          </p>
          <br />
          <p>
            I would describe myself as resourceful. I tackle problems with a
            kaizen mindset, focusing on continuous improvement through small,
            innovative changes. My creativity helps me navigate challenges,
            while curiosity drives me to learn every day. I thrive on
            collaboration, reflecting on successes and lessons learned to keep
            growing. My varied skills and interests enhance my life and drive my
            professional growth, shaping me into a well-rounded, adaptable
            person prepared for any challenge!
            <br />
            <strong>
              I&apos;m eager to connect and collaborate, reach out!
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
