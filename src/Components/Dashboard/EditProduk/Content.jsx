import css from "./Content.module.css";
import { useEffect, useRef, useState } from "react";
import { toRupiah } from "../../../Utils/toRupiahFormat";
import Loading from "../../Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import BASEURL from "../../../Utils/baseURL";
import ErrorPage from "../../../Pages/Errors/ErrorPage";
import { Cookie } from "../../../Auth/Cookies";
import Popup from "../../Popup/Popup";

const Content = (props) => {
  const inputCategory = useRef(null);
  const inputType = useRef(null);
  const [loading, setLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState([]);
  const [inputError, setInputError] = useState([]);
  const [
    errorRequest = {
      show: false,
      code: null,
    },
    setErrorRequest,
  ] = useState([]);
  const [
    popup = {
      show: true,
      status: null,
      message: null,
      refresh: false,
    },
    setPopup,
  ] = useState([]);
  const navigate = useNavigate();
  useEffect(function () {
    (async () => {
      try {
        const token = Cookie("itemku_token");
        const url =
          BASEURL() + "/api/shop/dashboard/produk/edit?_product=" + props.slug;
        const request = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });

        const response = await request.json();
        if (request.status === 200) {
          setLoading(false);
          setDataProduct(response.data);
        } else if (request.status === 404) {
          setLoading(false);
          setErrorRequest({ show: true, code: "404" });
        } else if (request.status === 403) {
          navigate("/login");
        } else if (request.status === 400) {
          setLoading(false);
          setErrorRequest({ show: true, code: "400" });
        } else {
          throw new Error("500");
        }
      } catch (error) {
        setLoading(false);
        setErrorRequest({
          show: true,
          code: isNaN(error.message) ? "500" : error.message,
        });
      }
    })();
  }, []);
  return (
    <>
      {popup.show && (
        <Popup
          status={popup.status}
          message={popup.message}
          refresh={popup.refresh}
        />
      )}
      {loading ? (
        <Loading />
      ) : errorRequest.show ? (
        <ErrorPage code={errorRequest.code} />
      ) : (
        <div className={css.container_content}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const data = Object.fromEntries(
                new FormData(event.target).entries()
              );
              (async () => {
                try {
                  setLoading(true);
                  const formData = new FormData();
                  formData.append("desc", data["desc"]);
                  formData.append("gambar_produk", data["gambar_produk"]);
                  formData.append("harga", data["harga"].replace(/\./g, ""));
                  formData.append("stock", data["stock"]);
                  formData.append("min_pembelian", data["min_pembelian"]);
                  const token = Cookie("itemku_token");
                  const url =
                    BASEURL() +
                    "/api/shop/dashboard/produk/edit?_method=PATCH&_product=" +
                    props.slug;
                  const request = await fetch(url, {
                    method: "POST",
                    headers: {
                      Authorization: token,
                    },
                    body: formData,
                  });
                  const response = await request.json();
                  if (request.status === 200) {
                    setPopup({
                      show: true,
                      status: "Success",
                      message: "Product berhasil diupdate!",
                    });
                    setTimeout(() => {
                      window.location.replace("/shop/dashboard/produk-toko");
                    }, 2000);
                  } else if (request.status === 400) {
                    setLoading(false);
                    setInputError(response.data);
                  } else if (request.status === 404) {
                    setLoading(false);
                    setErrorRequest({ show: true, code: "404" });
                  } else {
                    throw new Error("500");
                  }
                } catch (error) {
                  setLoading(false);
                  setErrorRequest({
                    show: true,
                    code: isNaN(error.message) ? "500" : error.message,
                  });
                }
              })();
            }}
            className={css.wrapper_form}
          >
            <div className={css.form_category_and_type}>
              <div className={css.input_category_text}>Kategori Produk</div>
              <div className={css.input}>
                <input
                  aria-label="input"
                  ref={inputCategory}
                  type="text"
                  readOnly
                  value={dataProduct.kategori}
                />
              </div>

              <div className={css.input_type}>
                <div className={css.input}>
                  <input
                    aria-label="input"
                    type="text"
                    readOnly
                    ref={inputType}
                    defaultValue={dataProduct.tipe_kategori}
                  />
                </div>
              </div>
            </div>

            <>
              <div className={css.form_information_product}>
                <div className={css.information_product_text}>
                  Informasi Produk
                </div>
                <div className={css.input_name_product}>
                  <span>Nama Item</span>
                  <input
                    type="text"
                    readOnly
                    defaultValue={dataProduct.kategori}
                  />
                </div>
                <div className={css.input_image_product}>
                  <div className={css.image_product_text}>Gambar Produk</div>
                  <div
                    className={css.wrapper_input_file}
                    style={{
                      backgroundImage: `url(${BASEURL()}/api/image/product/${
                        dataProduct.gambar_produk
                      })`,
                    }}
                  >
                    <input type="file" name="gambar_produk" />
                  </div>
                  <div className={css.input_image_rules}>
                    *Ukuran gambar harus berukuran 200 x 200 jika lebih maka
                    akan otomatis di resize. dan harus berformat PNG,JPG atau
                    GIF.
                  </div>
                  <span className={css.error_message_input}>
                    {inputError.gambar_produk}
                  </span>
                </div>

                <div className={css.input_desc_product}>
                  <div className={css.desc_product_text}>Deskripsi Produk</div>
                  <div className={css.wrapper_input_desc}>
                    <textarea
                      name="desc"
                      cols="1"
                      rows="5"
                      placeholder="Masukan deskripsi Produk"
                      defaultValue={dataProduct.desc}
                    ></textarea>
                  </div>
                  <span className={css.error_message_input}>
                    {inputError.desc}
                  </span>
                </div>
              </div>

              <div className={css.form_information_stock_and_price}>
                <div className={css.information_stock_and_price_text}>
                  Informasi Stok dan Harga Produk
                </div>
                <div className={css.input_price_product}>
                  <div className={css.price_product_text}>Harga Produk</div>
                  <div className={css.wrapper_input_price}>
                    <span>Rp.</span>
                    <input
                      type="text"
                      placeholder="0"
                      name="harga"
                      defaultValue={toRupiah(dataProduct.harga.toString())}
                      onChange={(event) => {
                        const valueInput = event.target.value.replace(
                          /\./g,
                          ""
                        );
                        if (isNaN(valueInput)) {
                          return false;
                        }
                        return (event.target.value = toRupiah(valueInput));
                      }}
                    />
                  </div>
                </div>
                <span className={css.error_message_input}>
                  {inputError.harga}
                </span>

                <div className={css.input_stock_product}>
                  <div className={css.stock_product_text}>Stok Produk</div>
                  <div className={css.wrapper_input_stock}>
                    <input
                      type="numeric"
                      name="stock"
                      placeholder="0"
                      defaultValue={dataProduct.stock}
                    />
                  </div>
                </div>
                <span className={css.error_message_input}>
                  {inputError.stock}
                </span>

                <div className={css.input_min_order_product}>
                  <div className={css.min_order_product_text}>
                    Minimal Pembelian
                  </div>
                  <div className={css.wrapper_input_min_order}>
                    <input
                      type="numeric"
                      name="min_pembelian"
                      placeholder="0"
                      defaultValue={dataProduct.min_pembelian}
                    />
                  </div>
                </div>
                <span className={css.error_message_input}>
                  {inputError.min_pembelian}
                </span>
              </div>

              <div className={css.confirm_form}>
                <button type="submit">Simpan Perubahan</button>
              </div>
            </>
          </form>
        </div>
      )}
    </>
  );
};

export default Content;
