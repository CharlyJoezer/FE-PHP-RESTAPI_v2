import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard";
import css from "./Lainnya.module.css";
import { Link } from "react-router-dom";

export const Lainnya = () => {
  const arrowIcon = (
    <img src="/assets/icon/arrow_right.png" alt="arrow_right" />
  );
  return (
    <>
      <div className={css.container_lainnya}>
        <div className={css.list_link}>
          <Link to="/shop/dashboard/profil-toko" className={css.link_item}>
            <span>
            <img src="/assets/icon/shops2.png" alt="" />
              Profil Toko</span>
            {arrowIcon}
          </Link>

          <Link to="/shop/dashboard/ulasan-pembeli" className={css.link_item}>
            <span>
            <img src="/assets/icon/star2.png" alt="" />
              Ulasan Pembeli</span>
            {arrowIcon}
          </Link>

          <Link to="/shop/dashboard/pengaturan-toko" className={css.link_item}>
            <span>
              <img src="/assets/icon/gear.png" alt="" />
              Pengaturan Toko</span>
            {arrowIcon}
          </Link>

          <Link to="/shop/dashboard/produk-toko" className={css.link_item}>
            <span>
              <img src="/assets/icon/box.png" alt="" />
              Produk Toko</span>
            {arrowIcon}
          </Link>
          <Link to="/" className={css.link_item}>
            <span>Kembali ke Halaman Utama</span>
            {arrowIcon}
          </Link>
        </div>
        <Navbar_Dashboard />
      </div>
    </>
  );
};
