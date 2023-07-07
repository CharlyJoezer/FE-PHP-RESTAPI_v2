import css from "../Login/Login.module.css";
import Header from "../../Components/Login/Header.jsx";
import Content from "../../Components/Login/Content.jsx";
import Footer from "../../Components/Login/Footer.jsx";

const Login = () => {
  return (
    <>
      <div className={css.container_login}>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default Login;
