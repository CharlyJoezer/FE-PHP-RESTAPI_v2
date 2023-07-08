import { Link } from "react-router-dom";
import css from "../Register/Content.module.css";

const Content = () => {
  return (
    <div className={css.content_wrapper}>
      <div className={css.content}>
        <div className={css.text_header}>
          <img src="https://files.itemku.com/illustration/tokoku/login/seller-login.png" />
        </div>
        <form className={css.form_input}>
          <div className={css.input_email}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="off"
            />
          </div>
          <div className={css.input_password}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
          <div className={css.input_password}>
            <input
              type="password"
              name="password_verify"
              placeholder="Password Verify"
              autoComplete="off"
            />
          </div>
          <div className={css.btn_submit}>
            <button>Daftar</button>
          </div>
        </form>

        <div className={css.hor_line}></div>

        <div className={css.link_login}>
          <span>Atau sudah punya akun ? </span>
          <Link to="/login">Masuk</Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
