import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";
const SkillsComponent = ({ skillName }) => {
  return (
    <div>
      <li style={{ display: "flex", alignItems: "center" }}>
        <FaCheckCircle size={10} style={{ marginRight: "6px" }} />
        {skillName}
      </li>
    </div>
  );
};
SkillsComponent.propTypes = {
  skillName: PropTypes.string.isRequired,
};
export default SkillsComponent;
