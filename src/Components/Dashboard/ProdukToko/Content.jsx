import css from "./Content.module.css";
import { Link } from "react-router-dom";
import { Modal_Edit } from "./Modal_Edit";
import { Modal_More } from "./Modal_More";
import { useState } from "react";
import { toRupiah } from "../../../Utils/toRupiahFormat";

const Content = (props) => {
  const product = props.product
  const [modalEdit, setModalEdit] = useState([]);
  const [modalMore, setModalMore] = useState([]);
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
          {product.map((item) => {
            return (
              <div className={css.product_shop} key={item.id_p}>
                <div className={css.name_product_and_btn}>
                  <span className={css.product_name}>{item.name}</span>
                  <svg
                    onClick={() => [
                      setModalMore({ show: true, data: { id_product: "test" } }),
                    ]}
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
                <div className={css.category_product}>{item.sub_categories.name}</div>
                <div className={css.price_and_stock_product}>
                  <span className={css.price}>Rp {toRupiah(item.harga.toString())}</span>
                  <span className={css.stock}>{item.stock} {item.types_sub_categories.name}</span>
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
                      data: {
                        product: item.id_p,
                        name: item.name,
                        category: item.sub_categories.name,
                        price: item.harga.toString(),
                        stock: item.stock,
                      },
                    });
                  }}
                >
                  Edit Stok dan Harga
                </div>
              </div>
            )
          })}
        </div>
        {modalEdit.show && (
          <div
            className={css.wrapper_container_modal_edit}
            onClick={() => {
              setModalEdit({ show: false, data: {} });
            }}
          >
            <Modal_Edit data={modalEdit.data} />
          </div>
        )}
        {modalMore.show && (
          <div
            className={css.wrapper_container_modal_more}
            onClick={() => {
              setModalMore({ show: false, data: {} });
            }}
          >
            <Modal_More data={modalMore.data} />
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
