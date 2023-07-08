import css from "../Register/Register.module.css";
import Header from "../../Components/Register/Header";
import Content from "../../Components/Register/Content";
import Footer from "../../Components/Register/Footer";

const Register = () => {
  return (
    <div className={css.container_register}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Register;
