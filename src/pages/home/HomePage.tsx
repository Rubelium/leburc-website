import { Helmet } from "react-helmet";
import Body from "./body/Body";
import Header from "./header/Header";
import Footer from "../../feature/footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Leburc - DJ / Web Designer</title>
        <link rel="canonical" href="https://www.leburc.com/" />
        <meta name="description"
          content="DJ / Web Designer" />
        <meta property="og:title" content="Leburc" />
        <meta name="og:description"
          content="DJ / Web Designer" />
        <meta property="og:url" content="https://www.leburc.com/"></meta>
        <meta name="twitter:title" content="Leburc" />
        <meta name="twitter:description"
          content="DJ / Web Designer" />
      </Helmet>
      <Header />
      <Body />
      <Footer darkMode />
    </div>
  );
};

export default HomePage;
