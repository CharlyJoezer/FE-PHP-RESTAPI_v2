import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import css from "./Content.module.css";
import BASEURL from "../../Utils/baseURL";
import Loading from "../Loading/Loading";
import ErrorPage from "../../Pages/Errors/ErrorPage";
import { toRupiah } from "../../Utils/toRupiahFormat";

const Content = (props) => {
  const { category, name_sub_category, name_type_category } = props;
  const [loading, setLoading] = useState(true);
  const [productLoad, setProductLoad] = useState(true)
  const [
    errorPage = {
      show: false,
      code: null,
    },
    setErrorPage,
  ] = useState([]);
  const [typeCategory, setTypeCategory] = useState([]);
  const [products, setProduct] = useState([])

  useEffect(()=>{
    (async () => {
      try {
        setLoading(true)
        const url =
          BASEURL() +
          "/api/types-sub-categories/?name_sub_category=" +
          name_sub_category;
        const request = await fetch(url, {
          method: "GET",
        });
        if (request.status === 200) {
          const response = await request.json();
          setTypeCategory(response.data);
          setLoading(false);
        } else if (request.status === 404) {
          setErrorPage({ show: true, code: '404' });
          setLoading(false);
        } else {
          throw new Error;
        }
      } catch (error) {
        setLoading(false);
        setErrorPage({ show: true, code: '500' });
      }
    })();
  }, [])
  useEffect(() => {
    (async () => {
      try {
        setProductLoad(true)
        const url = BASEURL()+`/api/sub_categories/${name_sub_category}/?type=${name_type_category}`;
        const request = await fetch(url, {
          method: "GET",
        });
        if (request.status === 200) {
          const response = await request.json();
          setProductLoad(false)
          setProduct(response.data)
        } else if (request.status === 404) {
          setProductLoad(false)
          setErrorPage({ show: true, code: '404' });
        } else {
          throw new Error;
        }
      } catch (error) {
        setProductLoad(false)
        setErrorPage({ show: true, code: '500' });
      }
    })();
  }, [name_type_category]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : errorPage.show ? (
        <ErrorPage code={errorPage.code} />
      ) : (
        <>
          <div className={css.container_header}>
                <div className={css.back_button} onClick={()=>{
                    window.location = `/category/${category}`
                }}>
                    <img src="/assets/icon/arrow_left.png" alt="arrow-left" />
                </div>
                <div className={css.input_search}>
                    <input
                        type="text" 
                        name="search" 
                        placeholder={'Cari Produk '+name_sub_category.replace(/-/g, ' ')} 
                        onKeyDown={(e)=>{
                          const search = e.target.value                              
                            if(e.key === 'Enter' && search.length > 0){
                              (async()=>{
                                  try{
                                        setProductLoad(true)
                                        const url = BASEURL()+`/api/search/${search}?sub_category=${name_sub_category}&type=${name_type_category}`
                                        const request = await fetch(url, {
                                            method: 'GET',
                                        })
                                        if(request.status === 200){
                                            const response = await request.json();
                                            setProduct(response.data.data)
                                            setProductLoad(false)
                                          }else if(request.status === 404){
                                            setErrorPage({ show: true, code: '404' });
                                          }else{
                                            throw new Error()
                                        }
                                    }catch(error){
                                        setErrorPage({ show: true, code: '500' });
                                    }
                                })()
                            }
                        }}    
                    />
                </div>
                <Link to={'/cart'} className={css.cart_link}>
                    <img src="/assets/icon/cart-icon.png" alt="cart-icon" />
                </Link>
          </div>
        <div className={css.container_content}>
          <div className={css.list_type_sub_category}>
            <Link
              to={`/category/${category}/${name_sub_category}/all`}
              className={css.type_sub_category}
              style={{
                borderBottom: (name_type_category.toLowerCase() === 'all') ? "2px solid blue" : 'none',
              }}
            >
              Semua
            </Link>
            {typeCategory.map((i)=>{
                return (
                  <Link to={`/category/${category}/${name_sub_category}/${i.name.toLowerCase()}`} 
                        key={i.name} 
                        className={css.type_sub_category}
                        style={{
                          borderBottom: (name_type_category.toLowerCase() === i.name.toLowerCase()) ? "2px solid blue" : 'none',
                        }}
                  >{i.name}</Link>
                    
                )
            })}
          </div>
          <div className={css.list_product}>
            {
              !productLoad &&
                products.map((product)=>{
                  return (
                  <Link to={'/product/'+product.slug} className={css.product} key={product.slug}>
                    <img
                      className={css.product_image}
                      src={BASEURL()+'/api/image/product/'+product.gambar_produk}
                      alt={product.nama_produk}
                    />
                    <div className={css.product_desc}>
                      <span className={css.product_name}>{product.nama_produk}</span>
                      <span className={css.product_price}>Rp {toRupiah(product.harga_produk.toString())}</span>
                      <span className={css.product_category}>{product.kategori_produk}</span>
                      <span className={css.name_shop_product}>
                        <img src="/assets/icon/shops.png" alt="shops" />
                        <span>{product.nama_toko}</span>
                      </span>
                    </div>
                  </Link>
                  )
                })
            }
          </div>
            { productLoad ? 
                <div style={{textAlign:'center'}}>Memuat...</div> 
              :
                products.length <= 0 &&
                <div className={css.product_not_found}>
                    <img src="/assets/image/search_not_found.jpg" alt="not-found" />
                    <span>Kategori / Tipe ini belum memiliki produk!</span>
                </div>
            }
            
        </div>
        </>
      )}
    </>
  );
};

export default Content;
