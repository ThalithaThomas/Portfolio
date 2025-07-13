import "./ProjectButton.css";
import PropTypes from "prop-types";
const ProjectBtn = ({ href }) => {
  return (
    <div>
      <a href={href}>
        <div className="simple-button">
          <button> </button>
        </div>
      </a>
    </div>
  );
};
ProjectBtn.propTypes = {
  href: PropTypes.string.isRequired,
};
export default ProjectBtn;
