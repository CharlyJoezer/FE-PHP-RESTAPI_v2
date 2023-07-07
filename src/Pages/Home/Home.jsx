import Navbar from "../../Components/Navbar/Navbar.jsx";
import Slider from "../../Components/Home/Slider.jsx";
import Category from "../../Components/Home/Category.jsx";
import Product from "../../Components/Home/Product.jsx";
import css from "../Home/Home.module.css";

const Home = () => {
  document.title = "Itemku"
  return (
    <>
      <Navbar />
      <div className={css.container_home}>
        <Slider />
        <Category />
        <div className={css.text_header}>Temukan Produkmu</div>
        <Product />
      </div>
    </>
  );
};

export default Home;
