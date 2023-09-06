import { useState, useEffect } from "react";
import css from "../Home/Product.module.css";
import { Link } from "react-router-dom";
import BASEURL from "../../Utils/baseURL";
import { toRupiah } from "../../Utils/toRupiahFormat";
import Popup from "../../Components/Popup/Popup";

const Product = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [
    popup = {
      show: false,
      status: null,
      message: null,
      refresh: false,
    },
    setPopup,
  ] = useState([]);

  useEffect(function () {
    async function getProduct() {
      try {
        setPopup({ show: false, status: null, message: null });
        const request = await fetch(BASEURL() + "/api/product");

        const response = await request.json();
        if (request.status === 200) {
          setProduct(response.pagination.data);
        } else if (request.status === 404) {
          setPopup({
            show: true,
            status: "Failed",
            message: "Periksa Internet Anda",
          });
        } else {
          throw new Error();
        }
      } catch (error) {
        setPopup({
          show: true,
          status: "Failed",
          message: "Server sedang bemasalah",
        });
      }
    }
    getProduct();
  }, []);
  return (
    <>
      {popup.show && <Popup status={popup.status} message={popup.message} />}
      <div className={css.container_product}>
        <div className={css.text_header}>Temukan Produkmu</div>
        <div className={css.products}>
          {!loading && "No Product"}
          {loading &&
            products.map(function (product) {
              return (
                <Link
                  to={"/product/" + product.slug}
                  className={css.product}
                  key={product.slug}
                >
                  <img
                    className={css.product_image}
                    src={
                      BASEURL() + "/api/image/product/" + product.gambar_produk
                    }
                    alt={product.nama_produk}
                  />
                  <div className={css.product_desc}>
                    <span className={css.product_name}>
                      {product.nama_produk}
                    </span>
                    <span className={css.product_price}>
                      Rp {toRupiah(product.harga_produk.toString())}
                    </span>
                    <span className={css.product_category}>
                      {product.kategori_produk}
                    </span>
                    <span className={css.name_shop_product}>
                      <img src="assets/icon/shops.png" alt="shops" />
                      <span>{product.nama_toko}</span>
                    </span>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Product;
