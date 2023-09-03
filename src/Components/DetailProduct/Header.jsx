import css from "./Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate()
  const product = props.product
  return (
    <>
      <div className={css.header}>
        <img className={css.back_btn} src="/assets/icon/arrow_left.png" alt="arrow_left" onClick={() =>{
          window.history.back()
        } } />
        <div className={css.product_name}>{product.nama_produk}</div>
      </div>
    </>
  );
};

export default Header;
