import css from "./CreateShop.module.css";
import Header from "../../Components/CreateShop/Header.jsx"
import Content from "../../Components/CreateShop/Content";
import {Cookie} from "../../Auth/Cookies"
import AuthRequired from "../../Components/AuthRequired/AuthRequired"
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading"
import { useNavigate } from "react-router-dom";
import BASEURL from "../../Utils/baseURL"
import ErrorPage from "../../Pages/Errors/ErrorPage"

const CreateShop = () => {
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  const [errorRequest, setErrorRequest] = useState([])
  const navigate = useNavigate()

  useEffect(function(){
    async function checkAuth(){
      try{
        const token = Cookie('itemku_token')
        const url = BASEURL()+"/api/auth/user-data"
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
        }else if(request.status === 403){
          setAuth(false)
          setLoading(false)
        }else if(request.status === 404){
          setAuth(false)
          setLoading(false)
        }else{
          throw new Error('500');
        }
      }catch(error){
        setLoading(false)
        setErrorRequest({show : true, code : isNaN(error.message) ? "500" : error.message})
      }
    }
    checkAuth()
  }, [])

  return (
    <>
      {loading ? <Loading />
      :
        errorRequest.show ? 
          <ErrorPage code={errorRequest.code}/>
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