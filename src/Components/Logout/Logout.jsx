import { useEffect, useState } from "react";
import { Cookie } from "../../Auth/Cookies.js";
import { deleteCookies } from "../../Auth/deleteCookies.js";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../Pages/Errors/ErrorPage.jsx";
import BASEURL from "../../Utils/baseURL.js";

const Logout = () => {
  const token = Cookie("itemku_token");
  const navigate = useNavigate();
  const [
    errorRequest = {
      show: false,
      code: null,
    },
    setErrorRequest,
  ] = useState([]);

  useEffect(function () {
    async function getLogout() {
      try {
        const url = BASEURL() + "/api/auth/logout";
        const request = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: token,
          },
        });

        if (request.status === 200) {
          deleteCookies("itemku_token");
          navigate("/");
        } else if (request.status === 403) {
          setErrorRequest({ show: true, code: "403" });
        } else {
          throw new Error("500");
        }
      } catch (error) {
        setErrorRequest({
          show: true,
          code: isNaN(error.message) ? "500" : error.message,
        });
      }
    }

    getLogout();
  }, []);

  return <>{errorRequest.show && <ErrorPage code={errorRequest.code} />}</>;
};

export default Logout;
