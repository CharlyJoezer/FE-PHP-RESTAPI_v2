import css from "../Home/Category.module.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className={css.categories_wrapper}>
      <h1 className={css.categories_main_text}>Tentukan Kategori</h1>
      <div className={css.categories}>
        <Link className={css.category_item} to={"/category/mobile-game"}>
          <img src="assets/icon/mobile-game.png" alt="mobile-gaming" />
          <span className={css.category_name}>Mobile Game</span>
        </Link>
        <Link className={css.category_item}>
          <img src="assets/icon/pulsa.png" alt="pulsa" />
          <span className={css.category_name}>Pulsa & Data</span>
        </Link>
        <Link className={css.category_item}>
          <img src="assets/icon/voucher.png" alt="kode_voucher" />
          <span className={css.category_name}>Kode Voucher</span>
        </Link>
        <Link className={css.category_item}>
          <img src="assets/icon/game-console.png" alt="game-console" />
          <span className={css.category_name}>Game Console</span>
        </Link>
        <Link className={css.category_item}>
          <img src="assets/icon/pc-game.png" alt="pc_game" />
          <span className={css.category_name}>PC Game</span>
        </Link>
        <Link className={css.category_item}>
          <img src="assets/icon/listrik.png" alt="listrik" />
          <span className={css.category_name}>Token Listrik</span>
        </Link>
        <Link className={css.category_item}>
          <img src="assets/icon/pdam.png" alt="pdam" />
          <span className={css.category_name}>PDAM</span>
        </Link>
        <Link className={css.category_item}>
          <img src="assets/icon/other.png" alt="lainnya" />
          <span className={css.category_name}>Lainnya</span>
        </Link>
      </div>
      <div className={css.hor_line}></div>
    </div>
  );
};

export default Category;
