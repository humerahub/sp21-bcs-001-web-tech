import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./pages/Services";
import Pagenotfound from "./pages/Pagenotfound";
import About from "./pages/About";
import Login from "./pages/Login";
// import { CgLogIn } from "react-icons/cg";
import Signup from "./pages/Signup";
import FoodOrdering from "./pages/FoodOrdering";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <Route path="*" element={<Pagenotfound />} /> */}
          <Route path="/FoodOrdering" element={<FoodOrdering />} />

          {/* <Route path="/" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
