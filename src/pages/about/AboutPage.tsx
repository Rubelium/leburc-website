import { Spinner } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="about-page" style={{ marginTop: "25%" }}>
      <h1 style={{ color: "#FFFFFF", marginBottom: "25%" }}>About Us (WIP)</h1>
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default AboutPage;
