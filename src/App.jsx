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
import {Lainnya as DashboardLainnya} from "./Pages/Shop/Dashboard/Lainnya/Lainnya.jsx";
import {ProfilToko as DashboardProfilToko} from "./Pages/Shop/Dashboard/ProfilToko/ProfilToko.jsx";
import {UlasanPembeli as DashboardUlasanPembeli} from "./Pages/Shop/Dashboard/UlasanPembeli/UlasanPembeli.jsx";
import {PengaturanToko as DashboardPengaturanToko} from "./Pages/Shop/Dashboard/PengaturanToko/PengaturanToko.jsx";
import {ProdukToko as DashboardProdukToko} from "./Pages/Shop/Dashboard/ProdukToko/ProdukToko.jsx";
import {EditProduk as DashboardEditProduk} from "./Pages/Shop/Dashboard/EditProduk/EditProduk.jsx";

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
          <Route path="/shop/dashboard/lainnya" element={<DashboardLainnya />} />
          <Route path="/shop/dashboard/profil-toko" element={<DashboardProfilToko />} />
          <Route path="/shop/dashboard/ulasan-pembeli" element={<DashboardUlasanPembeli />} />
          <Route path="/shop/dashboard/pengaturan-toko" element={<DashboardPengaturanToko />} />
          <Route path="/shop/dashboard/produk-toko" element={<DashboardProdukToko />} />
          <Route path="/shop/dashboard/produk/edit/:slug" element={<DashboardEditProduk />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
