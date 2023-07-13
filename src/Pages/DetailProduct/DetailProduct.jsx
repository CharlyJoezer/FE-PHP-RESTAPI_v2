import css from "./DetailProduct.module.css";
import {useParams} from "react-router-dom"
import Header from "../../Components/DetailProduct/Header"
import Navbar from "../../Components/Navbar/Navbar"
import { useEffect, useState } from "react";
import Content from "../../Components/DetailProduct/Content";

const DetailProduk = () => {
  const params = useParams()
  const [product, setProduct] = useState({})

  useEffect(function(){
    async function getProductData(){
      const formData = new URLSearchParams();
      for (const [key, value] of Object.entries(params)) {
        formData.append(key, value);
      }

      const url = 'http://localhost:8000/api/product/find'
      const request = await fetch(url,{
        method : 'POST',
        header : {
          'Content-type' : 'application/x-www-form-urlencoded'
        },
        body : formData.toString()
      })
      
      const response = await request.json()

      
      if(request.ok){
        setProduct(response.data[0])
      }
    }

    getProductData();
  }, [])

  return (
    <>
      <div className={css.container_detail_produk}>
        <Header />
        <Content product={product}/>
      </div>
      <Navbar />
    </>
  );
};

export default DetailProduk;
