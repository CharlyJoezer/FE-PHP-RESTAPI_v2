import css from "../Profil/Header.module.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className={css.header_wrapper}>
        <Link to="/logout" className={css.logout_btn}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 5.25L9 4.5H18L18.75 5.25V18.75L18 19.5H9L8.25 18.75V16.5H9.75V18H17.25V6H9.75V7.5H8.25V5.25Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.06068 12.7499L14.25 12.7499L14.25 11.2499L7.06068 11.2499L8.78035 9.53027L7.71969 8.46961L4.18936 11.9999L7.71969 15.5303L8.78035 14.4696L7.06068 12.7499Z" fill="#ffffff"></path> </g></svg>
          <span>Logout</span>
        </Link>
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
