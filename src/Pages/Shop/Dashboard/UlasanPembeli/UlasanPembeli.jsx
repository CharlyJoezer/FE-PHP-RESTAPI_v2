import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard";
import css from "./UlasanPembeli.module.css";
import Content from "../../../../Components/Dashboard/UlasanPembeli/Content";
import { Header } from "../../../../Components/Dashboard/Components/Header/Header";

export const UlasanPembeli = () => {
  document.title = "Ulasan Pembeli | Dashboard";
  return (
    <>
      <div className={css.cotainer_ulasan_pembeli}>
        <Header text="Ulasan Pembeli" />
        <Content />
        <Navbar_Dashboard />
      </div>
    </>
  );
};
