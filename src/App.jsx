import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Profil from "./Pages/Profil/Profil.jsx";
import Logout from "./Components/Logout/Logout.jsx";
import DetailProduk from "./Pages/DetailProduct/DetailProduct.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/product/:id" element={<DetailProduk />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
