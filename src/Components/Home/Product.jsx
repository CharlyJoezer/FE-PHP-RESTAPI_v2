import {useState, useEffect} from 'react'
import css from "../Home/Product.module.css"
import {Link} from "react-router-dom"
import BASEURL from "../../Utils/baseURL"


const Product = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(
      function () {
        async function getProduct() {
          const request = await fetch(
            BASEURL()+"/api/product/get"
          );
  
          const response = await request.json();
  
          setProduct(response.data);
          setLoading(true);
        }
        getProduct();
      },
      []
    );
    return (
      <div className={css.container_product}>
        <div className={css.text_header}>Temukan Produkmu</div>
        <div className={css.products}>
        {!loading && "No Product"}
        {loading && 
          products.map(function (product) {
            return (
              <Link to={'/product/'+product.id_product} className={css.product} key={product.id_product}>
                <img
                  className={css.product_image}
                  src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/1/11/fe4b1b65-93b4-4f95-bebf-ddcd9f88c65d.jpg"
                  alt="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/1/11/fe4b1b65-93b4-4f95-bebf-ddcd9f88c65d.jpg"
                />
                <div className={css.product_desc}>
                  <span className={css.product_name}>{product.name}</span>
                  <span className={css.product_price}>Rp {product.price}</span>
                  <span className={css.product_location}>
                    <img src="assets/icon/location.png" alt="location" />
                    <span>Jakarta Selatan</span>
                  </span>
                </div>
              </Link>
            );
          })
        }
        </div>
      </div>
    )
}

export default Product;