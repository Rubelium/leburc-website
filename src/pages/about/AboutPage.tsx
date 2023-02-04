import { Spinner } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div className="about-page" style={{ marginTop: "25%" }}>
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h1 style={{ color: "#FFFFFF", marginBottom: "25%" }}>About Us (WIP)</h1>
    </div>
  );
};

export default AboutPage;
