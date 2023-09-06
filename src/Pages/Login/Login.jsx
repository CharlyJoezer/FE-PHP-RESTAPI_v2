import css from "../Login/Login.module.css";
import Header from "../../Components/Login/Header.jsx";
import Content from "../../Components/Login/Content.jsx";
import Footer from "../../Components/Login/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { Cookie } from "../../Auth/Cookies";
import { useEffect, useState } from "react";

const Login = () => {
  document.title = "Login | Itemku";
  const getToken = Cookie("itemku_token");
  const navigate = useNavigate();

  useEffect(function () {
    if (getToken !== undefined) {
      navigate("/");
    }
  });

  return (
    <>
      {getToken === undefined && (
        <div className={css.container_login}>
          <Header />
          <Content />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Login;
