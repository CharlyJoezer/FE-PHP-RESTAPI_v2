import css from "./Pesanan.module.css";
import Content from "../../../../Components/Dashboard/Pesanan/Content";
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard";
import { Header as HeaderDashboard } from "../../../../Components/Dashboard/Components/Header/Header";

export const Pesanan = () => {
  document.title = "Pesanan | Dashboard";
  return (
    <>
      <div className={css.container_pesanan}>
        <HeaderDashboard text="Pesanan" />
        <Content />
        <Navbar_Dashboard />
      </div>
    </>
  );
};
