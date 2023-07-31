import css from "./CreateShop.module.css";
import Header from "../../Components/CreateShop/Header.jsx"
import Content from "../../Components/CreateShop/Content";
import {Cookie} from "../../Auth/Cookies"
import AuthRequired from "../../Components/AuthRequired/AuthRequired"
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading"
import { useNavigate } from "react-router-dom";
import BASEURL from "../../Utils/baseURL"

const CreateShop = () => {
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(function(){
    async function checkAuth(){
      const token = Cookie(' itemku_token')
      const url = BASEURL()+"/api/auth/get-user-data"
      const request = await fetch(url, {
        method : 'GET',
        headers : {
          'Authorization' : token
        }
      })
      const response = await request.json()
  
      if(request.status === 200){
        setAuth(true)
          if(response.data.shops !== null){
            navigate('/shop/dashboard/beranda')
          }
        setLoading(false)
      }else{
        setAuth(false)
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  return (
    <>
      {loading ? <Loading />
      :
        auth ? 
          <div className={css.container_create_shop}>
            <Header />
            <Content />
          </div>
        :
          <AuthRequired />
      }
    </>
  );
};

export default CreateShop