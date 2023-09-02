import css from "./DetailProduct.module.css";
import {useParams} from "react-router-dom"
import Header from "../../Components/DetailProduct/Header"
import Flow_Insert_Cart from "../../Components/DetailProduct/Flow_Insert_Cart"
import { useEffect, useState } from "react";
import Content from "../../Components/DetailProduct/Content";
import BASEURL from "../../Utils/baseURL";
import Loading from "../../Components/Loading/Loading";
import ErrorPage from "../Errors/ErrorPage"

const DetailProduk = () => {
  const params = useParams()
  const [product, setProduct] = useState({})
  document.title = (product.nama_produk) ? product.nama_produk+' | Itemku' : 'Memuat...'
  const [loading, setLoading] = useState(true)
  const [errorRequest = {
    show:false,
    code: null
  }, setErrorRequest] = useState([]) 
  
  useEffect(function(){
    (async() => {
      try{
        const url = BASEURL()+'/api/product/detail-product?slug='+params.id
        const request = await fetch(url, {
          method: 'GET'
        })
        const response = await request.json()
        if(request.status === 200){
          setProduct(response.data)
          setLoading(false)
        }else if(request.status === 404){
          setLoading(false)
          setErrorRequest({show:true, code: '404'})
        }else{
          throw new Error('500')
        }
      }catch(error){
        setLoading(false)
        setErrorRequest({show:true, code: isNaN(error.message) ? "500" : error.message})
      }
    })()
  }, [])

  return (
    <>
      {loading ? <Loading />
      :
        errorRequest.show 
        ? 
          (<ErrorPage code={errorRequest.code} />)
        : 
          <>
            <div className={css.container_detail_produk}>
              <Header product={product}/>
              <Content product={product}/>
            </div>
            <Flow_Insert_Cart slug={product.slug_produk}/>
          </>
      }
    </>
  );
};

export default DetailProduk;
