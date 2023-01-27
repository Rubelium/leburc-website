import logo from "../../png/logoF2t4BlackWhiteCircleFilled.png";
import title from "../../png/titleF2t4.png";

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" data-testid="app-logo" alt="logo" />
      <img src={title} className="app-title" data-testid="app-title" alt="logo" />
      <br />
      <h5>
        NO PERSONALITIES &#8226; NO FACES &#8226; JUST SLAMMING TRACKS
      </h5>
    </header >
  );
};

export default Header;
