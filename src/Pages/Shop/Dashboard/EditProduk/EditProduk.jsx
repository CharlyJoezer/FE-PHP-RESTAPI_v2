import css from "./EditProduk.module.css";
import {Header as HeaderDashboard} from "../../../../Components/Dashboard/Components/Header/Header";
import NavbarDashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard"
import Content from "../../../../Components/Dashboard/EditProduk/Content"
import { useParams } from "react-router-dom";

export const EditProduk = () => {
  document.title = 'Pesanan | Dashboard'
  const params = useParams()
  return (
    <>
      <div className={css.container_edit_toko}>
        <HeaderDashboard text="Edit Detail Produk" />
        <Content slug={params.slug}/>
        <NavbarDashboard />
      </div>
    </>
  );
};
