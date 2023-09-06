import { useRef, useState } from "react";
import css from "./ModalEditProfil.module.css";
import Popup from "../Popup/Popup";
import BASEURL from "../../Utils/baseURL";
import { Cookie } from "../../Auth/Cookies";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const ModalEditProfil = (props) => {
  const { closeModal, users } = props;
  const inputEditImage = useRef();
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
  const [loading, setLoading] = useState(false);
  const [reqMessageVal, setReqMessageVal] = useState([]);
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
      <div className={css.container}>
        <div className={css.modal}>
          <div className={css.modal_title}>
            <span>Edit Data Profil</span>
            <span
              className={css.close_modal_button}
              onClick={() => {
                closeModal({ show: false, data: {} });
              }}
            >
              &#10005;
            </span>
          </div>
          <div className={css.modal_content}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(
                  new FormData(e.target).entries()
                );
                (async () => {
                  try {
                    setPopup({ show: false, status: null, message: null });
                    setLoading(true);
                    const token = Cookie("itemku_token");
                    const url = BASEURL() + "/api/auth/user?_method=PATCH";
                    const request = await fetch(url, {
                      method: "POST",
                      headers: {
                        Authorization: token,
                      },
                      body: new FormData(e.target),
                    });
                    const response = await request.json();
                    setLoading(false);
                    if (request.status === 200) {
                      setPopup({
                        show: true,
                        status: "Success",
                        message: response.message,
                        refresh: true,
                      });
                    } else if (request.status === 400) {
                      setReqMessageVal(response.message);
                    } else if (request.status === 403) {
                      navigate("/login");
                    } else if (request.status === 404) {
                      setPopup({
                        show: true,
                        status: "Failed",
                        message: "Terjadi Kesalahan",
                      });
                    } else if (request.status === 422) {
                      setPopup({
                        show: true,
                        status: "Failed",
                        message: response.message,
                      });
                    } else {
                      throw new Error();
                    }
                  } catch (error) {
                    setPopup({
                      show: true,
                      status: "Failed",
                      message: "Server sedang bermasalah!",
                    });
                  }
                })();
              }}
              className={css.modal_content_form}
            >
              <div className={css.input_profil_image}>
                <img
                  id="preview_image_profil"
                  src={
                    users.foto_profil !== "/assets/users/image/default.jpg"
                      ? BASEURL() + "/api/image/user/" + users.foto_profil
                      : "/assets/users/image/default.jpg"
                  }
                  alt="foto-profil"
                />
                <div className={css.invalidRequest}>
                  {reqMessageVal.profil_image && reqMessageVal.profil_image[0]}
                </div>
                <input
                  ref={inputEditImage}
                  name="profil_image"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  style={{
                    width: "0px",
                    height: "0px",
                  }}
                  onChange={(e) => {
                    setPopup({ show: false, status: null, message: null });
                    const preview = document.getElementById(
                      "preview_image_profil"
                    );
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadstart = (e) => {
                        setLoading(true);
                      };
                      reader.onload = (e) => {
                        preview.src = e.target.result;
                      };
                      reader.onloadend = (e) => {
                        setLoading(false);
                      };

                      reader.readAsDataURL(file);
                    } else {
                      setPopup({
                        show: true,
                        status: "Failed",
                        message: "Gagal menampilkan gambar!",
                      });
                    }
                  }}
                />
                <span
                  style={{
                    color: "rgb(0, 76, 255)",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    const getInputFile = inputEditImage.current;
                    getInputFile.click();
                  }}
                >
                  Ganti Foto
                </span>
              </div>
              <div className={css.input_name}>
                <span>Username</span>
                <input
                  name="username"
                  defaultValue={users.username}
                  type="text"
                  placeholder="Contoh: John Doe"
                  required
                />
                <div className={css.invalidRequest}>
                  {reqMessageVal.username && reqMessageVal.username[0]}
                </div>
              </div>
              <div className={css.input_email}>
                <span>Email Address</span>
                <input
                  name="email"
                  defaultValue={users.email}
                  type="text"
                  placeholder="Contoh: JohnDoe@gmail.com"
                  required
                />
                <div className={css.invalidRequest}>
                  {reqMessageVal.email && reqMessageVal.email[0]}
                </div>
              </div>
              <button className={css.save_edit} type="submit">
                Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditProfil;
