import "./aboutPage.css";
import { Helmet } from "react-helmet";
import { Spinner } from "react-bootstrap";
import Footer from "../../feature/footer/Footer";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>FLOOR&#8308; - About Us</title>
        <link rel="canonical" href="https://www.floortothefour.com/#/about/" />
      </Helmet>
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h1 className="about-page-h1">About Us (WIP)</h1>
      <Footer darkMode={false} />
    </div>
  );
};

export default AboutPage;
