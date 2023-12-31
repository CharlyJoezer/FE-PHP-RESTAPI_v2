import { useState } from "react";
import css from "./Content.module.css";
import Loading from "../../Components/Loading/Loading";
import { Cookie } from "../../Auth/Cookies";
import { useNavigate } from "react-router-dom";
import BASEURL from "../../Utils/baseURL";
import ErrorPage from "../../Pages/Errors/ErrorPage";

const Content = () => {
  const [errors, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [
    errorRequest = {
      show: false,
      code: null,
    },
    setErrorRequest,
  ] = useState([]);
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const inputValue = Object.fromEntries(new FormData(event.target).entries());
    if (inputValue.name_shop.trim() === "") {
      setLoading(false);
      document.getElementById("name_shop").value = "";
      return setError({ name_shop: "Kolom tidak boleh kosong!" });
    }

    async function sendRequest() {
      try {
        const token = Cookie("itemku_token");
        const url = BASEURL() + "/api/shop/create";
        const request = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name_shop: inputValue.name_shop,
          }),
        });

        const response = await request.json();
        if (request.status === 201) {
          navigate("/shop/dashboard/beranda");
        } else if (request.status === 422) {
          document.getElementById("name_shop").value = "";
          setError(response.errors);
          setLoading(false);
        } else if (request.status === 409) {
          navigate("/shop/dashboard/beranda");
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
    }

    sendRequest();
  }
  return (
    <>
      {loading && <Loading />}
      {errorRequest.show ? (
        <ErrorPage code={errorRequest.code} />
      ) : (
        <div className={css.container_content}>
          <div className={css.content}>
            <div className={css.content_image}>
              <img
                src="https://tokoku.itemku.com/static/icon/tokoku-color.png?v=1.26.1"
                alt=""
              />
            </div>
            <form onSubmit={handleFormSubmit} className={css.form_input}>
              <div className={css.input}>
                <span className={css.input_title}>Nama Toko</span>
                <input
                  className={errors.name_shop && css.input_invalid}
                  id="name_shop"
                  name="name_shop"
                  type="text"
                  placeholder="Tokoku"
                  autoComplete="off"
                  required
                />
                {errors.name_shop && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.name_shop}
                  </span>
                )}
              </div>
              <button className={css.btn_confirm}>Mulai Berjualan</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
