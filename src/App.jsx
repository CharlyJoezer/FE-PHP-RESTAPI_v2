import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Profil from "./Pages/Profil/Profil.jsx";
import Logout from "./Components/Logout/Logout.jsx";
import DetailProduk from "./Pages/DetailProduct/DetailProduct.jsx";
import CreateShop from "./Pages/Shop/CreateShop.jsx";
import {Beranda as DashboardBeranda} from "./Pages/Shop/Dashboard/Beranda/Beranda.jsx";
import {Pesanan as DashboardPesanan} from "./Pages/Shop/Dashboard/Pesanan/Pesanan.jsx";
import {BuatProduk as DashboardBuatProduk} from "./Pages/Shop/Dashboard/BuatProduk/BuatProduk.jsx";

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
          <Route path="/shop/dashboard/beranda" element={<DashboardBeranda />} />
          <Route path="/shop/dashboard/pesanan" element={<DashboardPesanan />} />
          <Route path="/shop/dashboard/buat-produk" element={<DashboardBuatProduk />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
