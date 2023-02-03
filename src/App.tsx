import NavBar from "./feature/navBar/NavBar";
import "./css/App.css";
import Main from "./Main";
import Footer from "./feature/footer/Footer";

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
