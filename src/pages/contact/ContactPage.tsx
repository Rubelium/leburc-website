import { Spinner } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div className="contact-page" style={{ marginTop: "25%" }}>
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h1 style={{ color: "#FFFFFF", marginBottom: "25%" }}>Contact Us (WIP)</h1>
    </div>
  );
};

export default ContactPage;
