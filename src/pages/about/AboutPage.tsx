import "./aboutPage.css";
import { Helmet } from "react-helmet";
import { Spinner } from "react-bootstrap";
import Footer from "../../feature/footer/Footer";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>FLOOR&#8308; - About Us</title>
        <link rel="canonical" href="https://www.floortothefour.com/#/about" />
        <meta name="description"
          content="To spread the electronic music lifestyle & to further promote Artists, Labels, & Venues on the bleeding-edge of sound." />
        <meta property="og:title" content="FLOOR&#8308; - About Us" />
        <meta name="og:description"
          content="To spread the electronic music lifestyle & to further promote Artists, Labels, & Venues on the bleeding-edge of sound." />
        <meta name="twitter:title" content="FLOOR&#8308; - About Us" />
        <meta name="twitter:description"
          content="To spread the electronic music lifestyle & to further promote Artists, Labels, & Venues on the bleeding-edge of sound." />
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
