import logo from "./png/logoF2t4BlackWhiteCircleFilled.png";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FLOOR<sup>4</sup>
        </p>
        <a
          className="App-link"
          href="https://soundcloud.com/f2t4"
          target="_blank"
          rel="noopener noreferrer"
        >
          SoundCloud
        </a>
        <a
          className="App-link"
          href="https://www.youtube.com/F2t4TV"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/f2t4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="App-link"
          href="https://twitter.com/_F2t4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </header>
    </div>
  );
};

export default App;
