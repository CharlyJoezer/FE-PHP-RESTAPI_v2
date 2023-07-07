import css from "../Login/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={css.navbar}>
      <Link to="/">
        <img
          src="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fitemku%2Fitemku-logo-color-transparent.png&w=140&q=75"
          alt="https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fitemku%2Fitemku-logo-color-transparent.png&w=140&q=75"
        />
      </Link>
    </div>
  );
};

export default Header;
