import NavBar from "./feature/navBar/NavBar";
import Header from "./feature/header/Header";
import Body from "./feature/body/Body";
import Footer from "./feature/footer/Footer";
import "./css/App.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
