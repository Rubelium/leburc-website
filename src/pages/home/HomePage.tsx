import { Helmet } from "react-helmet";
import Body from "./body/Body";
import Header from "./header/Header";
import Footer from "../../feature/footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>FLOOR&#8308;</title>
        <link rel="canonical" href="https://www.floortothefour.com/" />
        <meta name="description"
          content="Floor to the Four serves the primest cuts of modern Techno and House music. No personalities, no faces, just slamming tracks." />
        <meta property="og:title" content="FLOOR&#8308;" />
        <meta name="og:description"
          content="Floor to the Four serves the primest cuts of modern Techno and House music. No personalities, no faces, just slamming tracks." />
        <meta property="og:url" content="https://www.floortothefour.com/"></meta>
        <meta name="twitter:title" content="FLOOR&#8308;" />
        <meta name="twitter:description"
          content="Floor to the Four serves the primest cuts of modern Techno and House music. No personalities, no faces, just slamming tracks." />
      </Helmet>
      <Header />
      <Body />
      <Footer darkMode />
    </div>
  );
};

export default HomePage;
