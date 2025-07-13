import "./skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div>
        <img src="/src/assets/office.jpg" alt="image.jpg" />
      </div>
      <div className="skills-p">
        <h1>
          About <span style={{ color: "aqua" }}>Me</span>
        </h1>
        <h3>Front end Developer!</h3>
        <p>
          Hello! I&apos;m an aspiring Front-End Developer with a strong
          enthusiasm for web design and user experience. Although I may not have
          formal experience yet, I&apos;m eager to learn and apply my skills in
          creating visually appealing and intuitive websites. I&apos;ve spent
          time developing my knowledge of HTML, CSS, React and JavaScript, while
          also keeping up with current design trends.
        </p>

        <p>
          My creativity drives me to build interactive and engaging web
          interfaces that are not only attractive but also enhance user
          experience. I&apos;m particularly fascinated by how design and
          technology converge to create seamless browsing experiences. With
          every project, I strive to understand the needs of users, ensuring
          that the interface is both user-friendly and aligned with the
          client&apos;s vision.
        </p>
        <p>
          I believe in continuous learning and am actively working on personal
          projects to strengthen my skills. I&apos;m excited about the
          opportunity to collaborate with others and bring unique ideas to life!
        </p>
      </div>
    </div>
  );
};

export default Skills;
