import { Spinner } from "react-bootstrap";
import ReactPlayer from "react-player";

const Body = () => {
  return (
    <div className="app-body">
      {/* <div className="media-player-wrapper">
        <ReactPlayer
          className="media-player"
          url="https://soundcloud.com/f2t4/floor036"
          width="100%"
          height="100%"
        />
      </div> */}
      <Spinner animation="border" role="status" variant="dark">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div >
  );
};

export default Body;
