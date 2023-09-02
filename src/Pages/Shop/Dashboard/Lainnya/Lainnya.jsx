import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard";
import css from "./Lainnya.module.css";
import { Link } from "react-router-dom";
import BASEURL from "../../../../Utils/baseURL"
import Loading from "../../../../Components/Loading/Loading";
import { useState, useEffect } from "react";
import { Cookie } from "../../../../Auth/Cookies";

export const Lainnya = () => {
  const [loading, setLoading] = useState(true);
  const [dataShop, setDataShop] = useState([]);
  const arrowIcon = (
    <img src="/assets/icon/arrow_right.png" alt="arrow_right" />
  );
  useEffect(()=>{
    (async()=>{
      const token = Cookie('itemku_token')
      const url = BASEURL()+'/api/shop/dashboard/profil-toko'
      const request = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      })

      const response = await request.json()
      if(request.status === 200){
        setDataShop(response.data)
        setLoading(false)
      }
    })()
  }, [])
  return (
    <>
      {loading && <Loading />}
      <div className={css.container_lainnya}>
        <div className={css.profil_shop}>
          <img src={BASEURL()+'/api/image/shop/'+dataShop.image} alt="image_shop" />
          <div className={css.biodata_shop}>
            <div className={css.biodata}>
              <span className={css.name_shop}>{dataShop.name}</span>
              <span className={css.status_shop}>Tokoku {dataShop.status}</span>
            </div>
            <div>
              <Link to={'/auth/logout'} className={css.logout_action}>Logout</Link>
            </div>
          </div>
        </div>

        <div className={css.header_list_link}>Lainnya</div>
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
