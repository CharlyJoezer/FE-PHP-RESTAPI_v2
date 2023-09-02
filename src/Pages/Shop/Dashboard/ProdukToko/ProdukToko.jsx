import { Header } from "../../../../Components/Dashboard/Components/Header/Header"
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard"
import css from "./ProdukToko.module.css"
import Content from "../../../../Components/Dashboard/ProdukToko/Content"
import BASEURL from "../../../../Utils/baseURL"
import {Cookie} from "../../../../Auth/Cookies"
import { useEffect, useState } from "react"
import ErrorPage from "../../../Errors/ErrorPage"
import Loading from "../../../../Components/Loading/Loading"
import { useNavigate } from "react-router-dom"

export const ProdukToko = () =>{
    document.title = 'Produk | Dashboard'
    const [product, setProduct] = useState([])
    const [errorRequest = {
        show: false,
        code: null
    }, setErrorRequest] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()



    useEffect(()=>{
        (async () => {
            try{
    
                const token = Cookie('itemku_token')
                const url = BASEURL()+"/api/shop/dashboard/produk-toko"
                const request = await fetch(url, {
                    method : "GET",
                    headers: {
                        Authorization : token
                    }
                })
        
                const response = await request.json()
                if(request.status === 200){
                    setLoading(false)
                    setProduct(response.data)
                }else if(request.status === 400){
                    setLoading(false)
                    setErrorRequest({show: true, code: '400' })
                }else if(request.status === 403){
                    navigate('/login')
                }else{
                    throw new Error("500")
                }
            }catch(error){
                setLoading(false)
                setErrorRequest({show: true, code: isNaN(error.mesasage) ? "500" : error.message })
            }
        })()
    }, [])
    return (
        <>  
            <div className={css.container_produk_toko}>
                {loading ? 
                    <Loading />
                        :
                    errorRequest.show ? 
                    <ErrorPage code={errorRequest.code} />
                        :
                    <>
                    <Header text="Produk Toko"/>
                    <Content product={product}/>
                    <Navbar_Dashboard />
                    </>
                }
            </div>
        </>
    )
}