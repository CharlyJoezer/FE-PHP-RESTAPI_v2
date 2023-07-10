import css from "../Profil/Header.module.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className={css.header_wrapper}>
        <div className={css.header}>
          <div className={css.profil_user}>
            <img className={css.profil_image} src="assets/icon/profil.png" alt="" />
            <div className={css.profil_desc}>
              <div className={css.profil_name}>Charly Joezer</div>
              <div className={css.profil_email}>charlyjoezer30@gmail.com</div>
              <div className={css.profil_wallet}>
                <img src="assets/icon/wallet.png" alt="" />
                <span>Rp 22.135</span>
              </div>
            </div>
          </div>
          <div className={css.list_btn}>
            <Link className={css.edit_profil_btn}>Edit Profil</Link>
            <Link className={css.topup_wallet_btn}>Topup Saldo</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
