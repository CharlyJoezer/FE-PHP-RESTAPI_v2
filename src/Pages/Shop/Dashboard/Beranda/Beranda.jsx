import css from "./Beranda.module.css";
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard";
import Content from "../../../../Components/Dashboard/Beranda/Content.jsx";
import Loading from "../../../../Components/Loading/Loading";
import { useEffect, useState } from "react";
import BASEURL from "../../../../Utils/baseURL";
import { Cookie } from "../../../../Auth/Cookies";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../../Errors/ErrorPage.jsx";

export const Beranda = () => {
  document.title = 'Beranda | Dashboard'
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [
    error = {
      show: false,
      code: null,
    },
    setError,
  ] = useState([]);
  const token = Cookie("itemku_token");
  const navigate = useNavigate();

  useEffect(function () {
    if (token === undefined) {
      navigate("/login");
    } else {
      async function sendRequest() {
        try {
          const url = BASEURL() + "/api/shop/dashboard/home";
          const request = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: token,
            },
          });

          if (request.status === 200) {
            const response = await request.json();
            setLoading(false);
            setData(response);
          } else if (request.status === 403) {
            navigate('/login')
          } else if (request.status === 404) {
            navigate('/shop/create')
          }else{
            throw new Error("500")
          }
        } catch (error) {
          setLoading(false);
          setError({
            show: true,
            code: isNaN(error.message) ? "500" : error.message,
          });
        }
      }
      sendRequest();
    }
  }, []);
  return (
    <>

        <div className={css.container_dashboard}>
          {loading
          ?
            <Loading />
          :
            error.show === true
            ?
            <ErrorPage code={error.code}/>
            :
            <Content data={data} />
          }

          <Navbar_Dashboard />
        </div>
    </>
  );
};
