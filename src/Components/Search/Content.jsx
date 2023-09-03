import { useEffect, useState } from "react"
import css from "./Content.module.css"
import {Link} from "react-router-dom"
import BASEURL from "../../Utils/baseURL"
import {toRupiah} from "../../Utils/toRupiahFormat"
import Loading from "../Loading/Loading"
import Popup from "../Popup/Popup"

const Content = (props)=>{
    const {search} = props
    const [dataSearch, setDataSearch] = useState([])
    const [loading, setLoading] = useState(true)
    const [popup={
        show:false,
        status:null,
        message:null,
    }, setPopup] = useState([])
    useEffect(()=>{
        (async()=>{
            setLoading(true)
            try{
                const url = BASEURL()+'/api/search/'+search
                const request = await fetch(url, {
                    method: 'GET',
                })
                const response = await request.json();
                if(request.status === 200){
                    setLoading(false)
                    setDataSearch(response.data.data)
                }else if(request.status === 404){
                    setPopup({show:true, status:'Failed', message:'Kata kunci pencarian tidak ditemukan'})
                }else{
                    throw new Error()
                }
            }catch(error){
                setPopup({show:true, status:'Failed', message:'Terjadi Kesalahan!'})
            }
        })()
    },[search])
    return (
        <>
            {loading && <Loading />}
            {popup.show && <Popup status={popup.status} message={popup.message}/>}
            <div className={css.container_content}>
                <div className={css.wrapper_list_product}>
                    {
                    !loading && <div className={css.count_product}>Hasil Pencarian : ({dataSearch.length}) Product ditemukan</div>   
                    }
                    {
                        (dataSearch.length > 0)
                        ?
                        <div className={css.list_product}>
                        {
                            dataSearch.map((product)=>{
                              return(
                                <Link to={'/product/'+product.slug  } className={css.product} key={product.slug}>
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
                        :
                        !loading &&
                        <div className={css.product_not_found}>
                            <img src="/assets/image/search_not_found.jpg" alt="not-found" />
                            <span>Maaf, Produk yang kamu cari tidak ada!</span>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Content;