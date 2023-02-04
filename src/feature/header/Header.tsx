import "./header.css";
import Logo from "../../images/png/logoF2t4BlackWhiteCircleFilled.png";
import Title from "../../images/png/titleF2t4White.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} className="header-logo" alt="F2T4 Logo" height="350px" width="350px" />
      <img src={Title} className="header-title" alt="F2T4 Title" width="420px" height="65px" />
      <br />
      <h1 className="header-h1">
        Floor to the Four - Floor&#8308;
      </h1>
      <h2 className="header-h2">
        SERVING THE PRIMEST CUTS OF MODERN TECHNO AND HOUSE
      </h2>
    </header >
  );
};

export default Header;
