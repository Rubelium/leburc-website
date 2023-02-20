import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NavBar from "./feature/navBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
