import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import css from "../Login/Content.module.css";
import Loading from "../Loading/Loading";

const Content = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  async function storeLogin(data) {
    setLoading(true);

    document.body.style.overflow = "hidden";

    const formData = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    const url = "http://localhost:8000/api/user/auth";
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
    const response = await request.json();

    if (request.status === 200) {
      const token = response.data.token;
      setCookie("itemku_token", token, 60);
      navigate("/");
      document.body.style.overflow = "auto";
    }

    if (request.status === 422) {
      setLoading(false);
      setError(response.errors);
      document.body.style.overflow = "auto";
    }

    if (request.status === 404) {
      setLoading(false);
      setError({ message: response.message });
      document.body.style.overflow = "auto";
    }
  }

  function setCookie(name, value, minute) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + minute * 60 * 1000);
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }

  return (
    <>
      {loading && <Loading />}
      <div className={css.content_wrapper}>
        <div className={css.content}>
          <div className={css.text_header}>
            <img src="https://files.itemku.com/illustration/tokoku/login/seller-login.png" />
            {error.message && (
              <div className={css.error_notvalid}>{error.message}</div>
            )}
          </div>
          <form
            className={css.form_input}
            onSubmit={(event) => {
              event.preventDefault();
              const getDataLogin = new FormData(event.target);
              const data = Object.fromEntries(getDataLogin.entries());
              storeLogin(data);
            }}
          >
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
              <button>Masuk</button>
            </div>
          </form>

          <div className={css.hor_line}></div>

          <div className={css.link_register}>
            <span>Atau belum punya akun ? </span>
            <Link to="/register">Daftar</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
