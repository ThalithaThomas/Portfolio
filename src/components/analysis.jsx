import "./analysisBtn.css";
import PropTypes from "prop-types";
const ViewProject = ({ href }) => {
  return (
    <div>
      <a href={href}>
        <div className="simple-btn">
          <button> </button>
        </div>
      </a>
    </div>
  );
};
ViewProject.propTypes = {
  href: PropTypes.string.isRequired,
};
export default ViewProject;
