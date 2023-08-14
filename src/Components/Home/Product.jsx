import {useState, useEffect} from 'react'
import css from "../Home/Product.module.css"
import {Link} from "react-router-dom"
import BASEURL from "../../Utils/baseURL"
import {toRupiah} from "../../Utils/toRupiahFormat"
import Popup from "../../Components/Popup/Popup"


const Product = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [popup = {
      show:false,
      status:null,
      message:null,
      refresh:false,
    }, setPopup] = useState([])
    
    useEffect(
      function () {
        async function getProduct() {
          try{
            setPopup({show:false,status:null,message:null})
            const request = await fetch(BASEURL()+"/api/product");
    
            const response = await request.json();
            if(request.status === 200){
              setProduct(response.pagination.data);
            }else if(request.status === 404){
              setPopup({show:true, status:'Failed', message:'Periksa Internet Anda'})
            }else{
              throw new Error()
            }
          }catch(error){
            setPopup({show:true, status:'Failed', message:'Server sedang bemasalah'})
          }
        }
        getProduct();
      },
      []
    );
    return (
      <>
      {popup.show && <Popup status={popup.status} message={popup.message} />}
      <div className={css.container_product}>
        <div className={css.text_header}>Temukan Produkmu</div>
        <div className={css.products}>
        {!loading && "No Product"}
        {loading && 
          products.map(function (product) {
            return (
              <Link to={'/product/'+product.slug_product  } className={css.product} key={product.id_product}>
                <img
                  className={css.product_image}
                  src={BASEURL()+'/api/image/product/'+product.path_image_product}
                  alt={product.name_product}
                />
                <div className={css.product_desc}>
                  <span className={css.product_name}>{product.name_product}</span>
                  <span className={css.product_price}>Rp {toRupiah(product.price_product.toString())}</span>
                  <span className={css.product_category}>{product.sub_categories.name_sub_category}</span>
                  <span className={css.name_shop_product}>
                    <img src="assets/icon/shops.png" alt="shops" />
                    <span>{product.shops.name_shop}</span>
                  </span>
                </div>
              </Link>
            );
          })
        }
        </div>
      </div>
      </>
    )
}

export default Product;