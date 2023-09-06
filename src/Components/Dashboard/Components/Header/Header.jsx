import css from "./Header.module.css";
export const Header = (props) => {
  return (
    <div className={css.main_text}>
      <img
        src="https://tokoku.itemku.com/static/icon/tokoku-color.png?v=1.27.0"
        alt="itemku_tokoku"
      />
      <span>{props.text}</span>
    </div>
  );
};
