import "./hero.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-section">
        <h1>
          Hi, I&apos;m Thalitha |
          <span className="highlight">
            <span>Data </span>
          </span>
          <span className="highlight">
            <span>Analyst</span>
          </span>
        </h1>

        <ul className="contactIcons">
          <li>
            <a href="https://www.linkedin.com/in/thalitha-sambo-50919011b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <FaLinkedinIn className="contactIcon" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/27720191566">
              <FaWhatsapp className="contactIcon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ThalithaThomas">
              <FaGithub className="contactIcon" />
            </a>
          </li>
          <li>
            <a href="mailto:thalithaasambo@gmail.com">
              <MdEmail className="contactIcon" />
            </a>
          </li>
        </ul>

        <p>
          I turn data into insights that help businesses make better decisions,
          and <br /> I&apos;m a firm believer in lifelong learning.
        </p>

        <div className="dowloadResume">
          <a href="/thalitha.pdf" download="Thalitha_Resume.pdf">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
