import Logo from "../../images/png/logoF2t4BlackWhiteCircleFilled.png";
import Title from "../../images/png/titleF2t4White.png";

const Header = () => {
  return (
    <header className="app-header">
      <img src={Logo} className="app-logo" alt="F2T4 Logo" />
      <img src={Title} className="app-title" alt="F2T4 Title" />
      <br />
      <h1 className="home-page-h1">
        Floor to the Four - Floor&#8308;
      </h1>
      <h2 className="home-page-h2">
        SERVING THE PRIMEST CUTS OF MODERN TECHNO AND HOUSE
      </h2>
    </header >
  );
};

export default Header;
