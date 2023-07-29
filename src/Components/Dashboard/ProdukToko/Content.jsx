import css from "./Content.module.css";
import { Link } from "react-router-dom";
import { Modal_Edit } from "./Modal_Edit";
import { useState } from "react";

const Content = () => {
  const [modalEdit, setModalEdit] = useState([]);
  return (
    <>
      <div className={css.container_content}>
        <div className={css.input_search_product}>
          <input type="text" name="search" placeholder="Cari Produk Toko" />
          <img src="/assets/icon/search-icon.png" alt="search" />
        </div>

        <div className={css.main_text_and_link_create_product}>
          <div className={css.daftar_dagangan_text}>Daftar Produk</div>
          <div className={css.link_create_product}>
            <Link to="/shop/dashboard/buat-produk">+ Tambah Produk</Link>
          </div>
        </div>

        <div className={css.list_product_shop}>
          <div className={css.product_shop}>
            <div className={css.name_product_and_btn}>
              <span className={css.product_name}>Diamond Lock</span>
              <svg
                className={css.btn_more}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle cx="12" cy="6" r="1.5" fill="#000000"></circle>{" "}
                  <circle cx="12" cy="12" r="1.5" fill="#000000"></circle>{" "}
                  <circle cx="12" cy="18" r="1.5" fill="#000000"></circle>{" "}
                </g>
              </svg>
            </div>
            <div className={css.category_product}>Growtopia</div>
            <div className={css.price_and_stock_product}>
              <span className={css.price}>Rp 5.000</span>
              <span className={css.stock}>0 Lock</span>
            </div>
            <div
              style={{
                height: "2px",
                backgroundColor: "#ddd",
                marginBottom: "12px",
              }}
            ></div>
            <div
              className={css.btn_edit_product}
              onClick={() => {
                setModalEdit({
                  show: true,
                  data: { name: "Diamond Lock", category:'Growtopia', price: "5000", stock  : 1},
                });
              }}
            >
              Edit Stok dan Harga
            </div>
          </div>
        </div>
        {modalEdit.show && (
          <div
            className="wrapper_container_modal"
            onClick={() => {
              setModalEdit({ show: false, data: {} });
            }}
          >
            <Modal_Edit data={modalEdit.data} />
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
