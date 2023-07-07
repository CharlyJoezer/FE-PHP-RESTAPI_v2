import css from "../Home/Category.module.css"

const Category = () => {
  return (
    <div className={css.categories}>
      <div className={css.category_item}>
        <img src="assets/icon/mobile-game.png" alt="mobile-gaming" />
        <span className={css.category_name}>Gaming</span>
      </div>
      <div className={css.category_item}>
        <img src="assets/icon/pakaian.png" alt="pakaian" />
        <span className={css.category_name}>Pakaian</span>
      </div>
      <div className={css.category_item}>
        <img src="assets/icon/makanan.png" alt="makanan" />
        <span className={css.category_name}>Makanan</span>
      </div>
      <div className={css.category_item}>
        <img src="assets/icon/other.png" alt="lainnya" />
        <span className={css.category_name}>Lainnya</span>
      </div>
    </div>
  );
};

export default Category;
