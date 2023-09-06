import css from "./Flow_Insert_Cart.module.css";
import Popup from "../../Components/Popup/Popup";
import BASEURL from "../../Utils/baseURL";
import { Cookie } from "../../Auth/Cookies";
import { useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";

const Flow_Insert_Cart = (props) => {
  const [
    popup = {
      show: false,
      status: null,
      message: null,
    },
    setPopup,
  ] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {loading && <Loading />}
      {popup.show && <Popup status={popup.status} message={popup.message} />}
      <div className={css.container_flow_insert_cart}>
        <div className={css.list_action}>
          <div className={css.start_chat}>
            <img src="/assets/icon/message.png" alt="message" />
          </div>
          <div className={css.checkout_product}>
            <span>Beli Langsung</span>
          </div>
          <div
            className={css.insert_cart}
            onClick={(e) => {
              (async () => {
                try {
                  setPopup({ show: false, status: null, message: null });
                  setLoading(true);
                  const token = Cookie("itemku_token");
                  const url = BASEURL() + "/api/cart";
                  const request = await fetch(url, {
                    method: "POST",
                    headers: {
                      Authorization: token,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      slug: props.slug,
                    }),
                  });
                  const response = await request.json();
                  if (request.status === 201) {
                    setLoading(false);
                    setPopup({
                      show: true,
                      status: "Success",
                      message: "1 Produk berhasil ditambahkan",
                    });
                  } else if (request.status === 403) {
                    navigate("/login");
                  } else if (request.status === 404) {
                    throw new Error("Produk tidak ditemukan!");
                  } else {
                    throw new Error("Server sedang bermasalah!");
                  }
                } catch (error) {
                  setLoading(false);
                  setPopup({
                    show: true,
                    status: "Failed",
                    message: error.message,
                  });
                }
              })();
            }}
          >
            {" "}
            +Keranjang
          </div>
        </div>
      </div>
    </>
  );
};

export default Flow_Insert_Cart;
