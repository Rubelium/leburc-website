import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import NavBar from "./feature/navBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
