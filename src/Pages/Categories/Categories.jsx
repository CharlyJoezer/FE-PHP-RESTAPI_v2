import css from "./Categories.module.css";
import Header from "../../Components/Categories/Header";
import Content from "../../Components/Categories/Content";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BASEURL from "../../Utils/baseURL";
import Loading from "../../Components/Loading/Loading";
import Popup from "../../Components/Popup/Popup";
import ErrorPage from "../../Pages/Errors/ErrorPage";

const Categories = () => {
  const params = useParams();
  const title = params.name_category.replace(/-/g, " ");
  document.title = title.charAt(0).toUpperCase() + title.slice(1) + " | Itemku";

  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [
    popup = {
      show: false,
      status: null,
      message: null,
    },
    setPopup,
  ] = useState([]);
  const [
    errorPage = {
      show: false,
      code: null,
    },
    setErrorPage,
  ] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const url =
          BASEURL() + "/api/categories?category_name=" + params.name_category;
        const request = await fetch(url, {
          method: "GET",
        });

        const response = await request.json();
        if (request.status === 200) {
          setCategories(response.data);
          setLoading(false);
        } else if (request.status === 404) {
          setErrorPage({ show: true, code: "404" });
          setLoading(false);
        } else {
          throw new Error();
        }
      } catch (Error) {
        setPopup({
          show: true,
          status: "Failed",
          message: "Terjadi Kesalahan!",
        });
      }
    })();
  }, []);
  return (
    <>
      {popup.show && <Popup status={popup.status} message={popup.message} />}
      {loading ? (
        <Loading />
      ) : errorPage.show ? (
        <ErrorPage code={errorPage.code} />
      ) : (
        <div className={css.container_categories}>
          <Header name_category={categories.name_category} />
          <Content
            list_sub_category={categories.list_sub_category}
            category={params.name_category}
          />
        </div>
      )}
    </>
  );
};

export default Categories;
