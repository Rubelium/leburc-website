import logo from "../../png/logoF2t4BlackWhiteCircleFilled.png";
import title from "../../png/titleF2t4.png";

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" data-testid="app-logo" alt="F2T4 Logo" />
      <img src={title} className="app-title" data-testid="app-title" alt="F2T4 Title" />
      <br />
      <h1 style={{ display: "none" }}>
        Floor to the Four - Floor&#8308;
      </h1>
      <h2 style={{ fontSize: "1.25rem" }}>
        NO PERSONALITIES &#8226; NO FACES &#8226; JUST SLAMMING TRACKS
      </h2>
    </header >
  );
};

export default Header;
