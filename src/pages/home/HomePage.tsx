import { Helmet } from "react-helmet";
import Body from "../../feature/body/Body";
import Header from "../../feature/header/Header";
import Footer from "../../feature/footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>FLOOR&#8308;</title>
        <link rel="canonical" href="https://www.floortothefour.com/" />
      </Helmet>
      <Header />
      <Body />
      <Footer darkMode />
    </div>
  );
};

export default HomePage;
