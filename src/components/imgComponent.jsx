import PropTypes from "prop-types";
import "./imgComponent.css";
const ImgComponent = ({ image, href }) => {
  return (
    <div className="img-wrapper">
      <img src={image} alt="" />
      <div className="img-content">
        <a href={href}>
          <button className=" gitHubBtn">Source Code</button>
        </a>
      </div>
    </div>
  );
};
ImgComponent.propTypes = {
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
export default ImgComponent;
