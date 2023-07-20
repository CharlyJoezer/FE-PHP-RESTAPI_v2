import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Profil from "./Pages/Profil/Profil.jsx";
import Logout from "./Components/Logout/Logout.jsx";
import DetailProduk from "./Pages/DetailProduct/DetailProduct.jsx";
import CreateShop from "./Pages/Shop/CreateShop.jsx";
import {Beranda as Dashboard} from "./Pages/Shop/Dashboard/Beranda/Beranda.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/auth/logout" element={<Logout />} />
          <Route path="/product/:id" element={<DetailProduk />} />
          <Route path="/shop/create" element={<CreateShop />} />
          <Route path="/shop/dashboard/beranda" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
