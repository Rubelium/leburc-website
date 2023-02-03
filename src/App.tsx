import "./css/App.css";
import Footer from "./feature/footer/Footer";
import Main from "./Main";
import NavBar from "./feature/navBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
