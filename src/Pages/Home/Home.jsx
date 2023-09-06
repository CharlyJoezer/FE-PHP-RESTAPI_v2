import Navbar from "../../Components/Navbar/Navbar.jsx";
import Slider from "../../Components/Home/Slider.jsx";
import Category from "../../Components/Home/Category.jsx";
import Product from "../../Components/Home/Product.jsx";
import css from "../Home/Home.module.css";
import Header from "../../Components/Home/Header.jsx";

const Home = () => {
  document.title = "Itemku";

  return (
    <>
      <Navbar />
      <div className={css.container_home}>
        <Header />
        <Slider />
        <Category />
        <Product />
      </div>
    </>
  );
};

export default Home;
