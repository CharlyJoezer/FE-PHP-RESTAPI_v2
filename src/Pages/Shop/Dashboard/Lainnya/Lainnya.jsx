import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard";
import css from "./Lainnya.module.css";
import { Link } from "react-router-dom";

export const Lainnya = () => {
  return (
    <>
      <div className={css.container_lainnya}>
        <div className={css.list_link}>
          <Link to="/shop/dashboard/profil-toko" className={css.link_item}>
            <span>Profil Toko</span>
            <svg
              fill="#000000"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"></path>
              </g>
            </svg>
          </Link>

          <Link to="/shop/dashboard/ulasan-pembeli" className={css.link_item}>
            <span>Ulasan Pembeli</span>
            <svg
              fill="#000000"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"></path>
              </g>
            </svg>
          </Link>

          <Link to="/shop/dashboard/pengaturan-toko" className={css.link_item}>
            <span>Pengaturan Toko</span>
            <svg
              fill="#000000"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"></path>
              </g>
            </svg>
          </Link>

          <Link to="/shop/dashboard/produk-toko" className={css.link_item}>
            <span>Produk Toko</span>
            <svg
              fill="#000000"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"></path>
              </g>
            </svg>
          </Link>


        </div>
        <Navbar_Dashboard />
      </div>
    </>
  );
};
