import { useEffect, useState } from "react";
import css from "./Content.module.css";
import BASEURL from "../../../Utils/baseURL";
import { Cookie } from "../../../Auth/Cookies";
import Loading from "../../Loading/Loading";
import Popup from "../../Popup/Popup";
import { useNavigate } from "react-router-dom";
const Content = () => {
  const [statusShop, setStatusShop] = useState(false);
  const [editOperationalShop, setEditOperationalShop] = useState(false);
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
  const navigate = useNavigate();
  useEffect(function () {
    (async () => {
      try {
        const token = Cookie("itemku_token");
        const url = BASEURL() + "/api/shop/dashboard/profil-toko";
        const request = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        const response = await request.json();
        if (request.status === 200) {
          setLoading(false);
          response.data.status === "Buka"
            ? setStatusShop(true)
            : setStatusShop(false);
        } else if (request.status === 403) {
          navigate("/login");
        } else {
          throw new Error("500");
        }
      } catch (error) {
        setPopup({ show: true, status: "Failed", message: "Server Error" });
      }
    })();
  }, []);
  return (
    <>
      {loading && <Loading />}
      {popup.show && (
        <Popup
          status={popup.status}
          message={popup.message}
          refresh={popup.refresh}
        />
      )}
      <div className={css.container_content}>
        <div className={css.wrapper_activity}>
          <div className={css.activity_text}>Aktivitas</div>
          <div className={css.activity_list_setting}>
            <div className={css.status_shop}>
              <div className={css.about_text}>
                <div>Status Toko</div>
                <span>
                  Aktifkan toko agar pembeli dapat melihat produk dan membuat
                  pesanan.
                </span>
              </div>
              <div
                className={css.status_btn_action}
                onClick={() => {
                  (async () => {
                    try {
                      setLoading(true);
                      setPopup({ show: false, status: null, message: null });
                      const token = Cookie("itemku_token");
                      const url =
                        BASEURL() +
                        "/api/shop/dashboard/pengaturan-toko/status";
                      const request = await fetch(url, {
                        method: "PATCH",
                        headers: {
                          Authorization: token,
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          status: statusShop ? "true" : "false",
                        }),
                      });
                      const response = await request.json();
                      if (request.status === 200) {
                        setLoading(false);
                        setPopup({
                          show: true,
                          status: "Success",
                          message: response.message,
                        });
                        statusShop ? setStatusShop(false) : setStatusShop(true);
                      } else if (request.status === 400) {
                        setLoading(false);
                        setPopup({
                          show: true,
                          status: "Failed",
                          message: response.message,
                        });
                      } else if (request.status === 403) {
                        navigate("/login");
                      } else {
                        throw new Error("500");
                      }
                    } catch (error) {
                      setPopup({
                        show: true,
                        status: "Failed",
                        message: "Server Error",
                      });
                    }
                  })();
                }}
              >
                <div
                  className={css.toggle}
                  style={{ backgroundColor: statusShop && "#307FE2" }}
                >
                  <i
                    className={css.toggle_circle}
                    style={{
                      right: statusShop && "5px",
                      left: statusShop && "unset",
                    }}
                  ></i>
                </div>
                <div className={css.status_text}>
                  {statusShop ? "Buka" : "Tutup"}
                </div>
              </div>
            </div>
            <div className={css.operational_shop}>
              <div className={css.content_operational_shop}>
                <div className={css.about_text}>
                  <div>Jam Operasional Toko</div>
                  {!editOperationalShop && <span>00:00 - 00:00</span>}
                </div>
                {!editOperationalShop && (
                  <i className={css.btn_action_setting_time}>
                    <img
                      onClick={() => {
                        setEditOperationalShop(true);
                      }}
                      src="/assets/icon/pensil.png"
                      alt="pensil"
                    />
                  </i>
                )}
              </div>
              {editOperationalShop && (
                <div className={css.current_setting_time}>
                  <form
                    className={css.form_edit_operational_shop}
                    onSubmit={(event) => {
                      event.preventDefault();
                      const data = Object.fromEntries(
                        new FormData(event.target).entries()
                      );
                      console.log(data);
                    }}
                  >
                    <div className={css.wrapper_list_input}>
                      <div className={css.input_open_shop}>
                        <div className={css.open_shop_label}>Jam Buka Toko</div>
                        <div>
                          <input
                            type="time"
                            name="open_time"
                            placeholder="00:00"
                          />
                        </div>
                      </div>

                      <span className={css.input_time_seperator}>-</span>

                      <div className={css.input_closed_shop}>
                        <div className={css.closed_shop_label}>
                          Jam Tutup Toko
                        </div>
                        <div>
                          <input
                            type="time"
                            name="closed_time"
                            placeholder="00:00"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={css.wrapper_btn_action_setting_time}>
                      <button
                        type="button"
                        onClick={() => {
                          setEditOperationalShop(false);
                        }}
                      >
                        Batal
                      </button>
                      <button type="submit">Simpan</button>
                    </div>
                    <hr />
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
