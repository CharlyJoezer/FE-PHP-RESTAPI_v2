import css from "../Register/Register.module.css";
import Header from "../../Components/Register/Header";
import Content from "../../Components/Register/Content";
import Footer from "../../Components/Register/Footer";
import { useNavigate } from "react-router-dom";
import { Cookie } from "../../Auth/Cookies";
import { useEffect } from "react";

const Register = () => {
  const getToken = Cookie(' itemku_token')
  const navigate = useNavigate()

  useEffect(function(){
    if(getToken !== undefined){
      navigate('/')
    }
  })

  return (
    <>
      {getToken === undefined &&
        <div className={css.container_register}>
          <Header />
          <Content />
          <Footer />
        </div>
      }
    </>
  );
};

export default Register;
