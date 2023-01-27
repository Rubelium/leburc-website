import ReactPlayer from "react-player";

const Body = () => {
  return (
    <div className="app-body">
      <div className="media-player-wrapper">
        <ReactPlayer
          url="https://soundcloud.com/f2t4/floor036"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Body;
