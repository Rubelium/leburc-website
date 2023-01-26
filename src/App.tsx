import ReactPlayer from "react-player";
import logo from "./png/logoF2t4BlackWhiteCircleFilled.png";
import NavBar from "./feature/navBar/NavBar";
import FooterBar from "./feature/footerBar/FooterBar";
import "./css/App.css";
import { SocialIcon } from "react-social-icons";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" data-testid="appLogo" alt="logo" />
        {/* <div>
          <ReactPlayer
            url="https://soundcloud.com/f2t4/floor036"
            data-testid="soundcloudSpotlight"
          />
        </div> */}
        {<br />}
        <SocialIcon url="https://soundcloud.com/f2t4" bgColor="#000000" />
        <br />
        <SocialIcon url="https://www.youtube.com/F2t4TV" bgColor="#000000" />
        <br />
        <SocialIcon url="https://www.instagram.com/f2t4/" bgColor="#000000" />
        <br />
        <SocialIcon url="https://twitter.com/_F2t4" bgColor="#000000" />
        <br />
      </header>
      <FooterBar />
    </div>
  );
};

export default App;
