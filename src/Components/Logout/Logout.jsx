import { useEffect } from "react";
import {Cookie} from "../../Auth/Cookies.js"
import {deleteCookies} from "../../Auth/deleteCookies.js"
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const token = Cookie(' itemku_token')
    const navigate = useNavigate()

    useEffect(function(){
        async function getLogout(){
            const url = "http://localhost:8000/api/user/logout"
            const request = await fetch(url, {
                method : "POST",
                headers : {
                    Authorization : token
                }
            })

            const response = request.json()

            if(request.ok){
                deleteCookies('itemku_token')
                return navigate('/')
            }else{
                return navigate('/login')
            }
        }

        getLogout()
    }, [])

}

export default Logout;