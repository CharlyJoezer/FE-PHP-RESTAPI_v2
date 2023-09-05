import css from "./Header.module.css";

const Header = (props) => {
  const {name_category} = props
  return (
    <>
      <div className={css.container_header}>
        <div className={css.header}>
          <img
            className={css.back_btn}
            src="/assets/icon/arrow_left.png"
            alt="arrow_left"
            onClick={() => {
              window.history.back();
            }}
          />
          <div className={css.product_name}>
            <div style={{fontSize:'12px'}}>Kategori</div>
            <div style={{fontWeight:'bold'}}>{name_category}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
