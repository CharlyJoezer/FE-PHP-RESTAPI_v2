import css from "./ProfilToko.module.css"
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard";
import {Header as HeaderDashboard} from "../../../../Components/Dashboard/Components/Header/Header";
import Content from "../../../../Components/Dashboard/ProfilToko/Content";
import BASEURL from "../../../../Utils/baseURL";
import { useEffect } from "react";
import { Cookie } from "../../../../Auth/Cookies";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../../Errors/ErrorPage";
import Loading from "../../../../Components/Loading/Loading";

export const ProfilToko = () => {
    const [profilShop, setProfilShop] = useState([])
    const [errorPage = {
        show: false,
        code: null
    }, setErrorPage] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(function(){
        (async () => {
            try{
                setLoading(true)
                const token = Cookie(' itemku_token')
                const url = BASEURL()+"/api/shop/dashboard/profil-toko"
                const request = await fetch(url, {
                    method : 'GET',
                    headers : {
                        Authorization : token
                    }
                })
                const response = await request.json()
                if(request.status === 200){
                    setLoading(false)
                    setProfilShop(response.data)
                }else if(request.status === 403){
                    navigate('/login')
                }else{
                    throw new Error('500')
                }
            }catch(error){
                setLoading(false)
                setErrorPage({show: true, code: '500'})
            }

        })()
    }, [])
    return (
        <>  
            {loading && <Loading />}
            {errorPage.show ? 
            <ErrorPage code={errorPage.code}/>
                :
            <div className={css.container_profil_toko}>
                <HeaderDashboard text="Profil Toko"/>
                <Content data={profilShop}/>
                <Navbar_Dashboard />
            </div>
            }
        </>
    )
}