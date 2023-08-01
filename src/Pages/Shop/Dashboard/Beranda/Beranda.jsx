import css from "./Beranda.module.css"
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard"
import Content from "../../../../Components/Dashboard/Beranda/Content.jsx"
import Loading from "../../../../Components/Loading/Loading"
import { useEffect, useState } from "react"
import BASEURL from "../../../../Utils/baseURL"
import {Cookie} from "../../../../Auth/Cookies"
import { useNavigate } from "react-router-dom"

export const Beranda = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);
    const token = Cookie(' itemku_token')
    const navigate = useNavigate()

    useEffect(function(){
        if(token === undefined){
            navigate('/login')
        }else{
            try{
                async function sendRequest(){
                    const url = BASEURL()+"/api/shop/dashboard/home"
                    const request = await fetch(url,{
                        method : 'GET',
                        headers : {
                            'Authorization' : token
                        }
                    })
    
                    const response = await request.json()
                    setLoading(false)
                    setData(response)
                }
                sendRequest()
    
            }catch(Exception){
                console.error('sdasdas')
            }
        }
    }, [])
    return (
        <>
        {loading
        ?
            <Loading />
        :
            <div className={css.container_dashboard_shop}>
                <Content data={data}/>
                <Navbar_Dashboard />
            </div>
        }
        </> 
    )
}