import Body from "../../feature/body/Body";
import Header from "../../feature/header/Header";
import Footer from "../../feature/footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Body />
      <Footer darkMode />
    </div>
  );
};

export default HomePage;
