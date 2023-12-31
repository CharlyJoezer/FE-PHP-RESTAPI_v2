import { useNavigate, Link } from "react-router-dom";
import css from "../Register/Content.module.css";
import { useState } from "react";
import Loading from "../Loading/Loading";
import BASEURL from "../../Utils/baseURL";
import ErrorPage from "../../Pages/Errors/ErrorPage";

const Content = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [
    errorRequest = {
      show: false,
      code: null,
    },
    setErrorRequest,
  ] = useState([]);
  const navigate = useNavigate();

  async function storeRegister(data) {
    try {
      setLoading(true);
      document.body.style.overflow = "hidden";

      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(data)) {
        formData.append(key, value);
      }

      const url = BASEURL() + "/api/auth/register";
      const request = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const response = await request.json();

      if (request.status === 201) {
        navigate("/login");
      } else if (request.status === 422) {
        setLoading(false);
        setError(response.errors);
        document.body.style.overflow = "auto";
      } else {
        throw new Error("500");
      }
    } catch (error) {
      setErrorRequest({
        show: true,
        code: isNaN(error.message) ? "500" : error.message,
      });
    }
  }

  return (
    <>
      {errorRequest.show ? (
        <ErrorPage code={errorRequest.code} />
      ) : (
        <>
          {loading && <Loading />}
          <div className={css.content_wrapper}>
            <div className={css.content}>
              <div className={css.text_header}>
                <img src="https://files.itemku.com/illustration/tokoku/login/seller-login.png" />
              </div>
              <form
                className={css.form_input}
                onSubmit={(event) => {
                  event.preventDefault();
                  const getDataRegister = new FormData(event.target);
                  const data = Object.fromEntries(getDataRegister.entries());
                  storeRegister(data);
                }}
              >
                <div className={css.input_username}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="off"
                    required
                    className={error.username && css.error_input}
                  />
                  {error.username && (
                    <div className={css.error_message}>{error.username}</div>
                  )}
                </div>
                <div className={css.input_email}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    autoComplete="off"
                    required
                    className={error.email && css.error_input}
                  />
                  {error.email && (
                    <div className={css.error_message}>{error.email}</div>
                  )}
                </div>
                <div className={css.input_password}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    required
                    className={error.password && css.error_input}
                  />
                  {error.password && (
                    <div className={css.error_message}>{error.password}</div>
                  )}
                </div>
                <div className={css.btn_submit}>
                  <button type="submit">Daftar</button>
                </div>
              </form>

              <div className={css.hor_line}></div>

              <div className={css.link_login}>
                <span>Atau sudah punya akun ? </span>
                <Link to="/login">Masuk</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Content;
