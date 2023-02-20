import "./header.css";
import Title from "../../../images/png/Leburc_Logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Title} className="header-title" alt="Leburc Title" width="420px" height="65px" />
      <br />
      <h1 className="header-h1">
        TEST
      </h1>
    </header >
  );
};

export default Header;
