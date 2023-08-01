import css from "../Profil/Profil.module.css"
import {useState, useEffect} from "react"
import Navbar from "../../Components/Navbar/Navbar"
import {Cookie} from "../../Auth/Cookies"
import Header from "../../Components/Profil/Header"
import Content from "../../Components/Profil/Content"
import Footer from "../../Components/Profil/Footer"
import AuthRequired from "../../Components/AuthRequired/AuthRequired.jsx"
import Loading from "../../Components/Loading/Loading"
import BASEURL from "../../Utils/baseURL"

const Profil = () => {
    document.title = 'Profil'
    const token = Cookie(' itemku_token')
    const [user, setDataUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [auth, setAuth] = useState(false)

    useEffect(function(){
      if(token === undefined){
        setLoading(false)
      }else{
        async function getUserData(token){
          const url = BASEURL()+"/api/auth/user-data"
          const request = await fetch(url,{
            method : 'GET',
            headers : {
              'Authorization' : token
            }
          })
  
          const response = await request.json()
  
          if(request.status === 200){
            setAuth(true)
            setDataUser(response.data)
            setLoading(false)
          }else{
            setAuth(false)
            setLoading(false)
          }
        }
        getUserData(token)
      }
    }, [])
    return (
        <>
            <Navbar users={user}/>
            <div className={css.container_profil}>
              {loading ? <Loading /> :
                auth ?
                <>
                  <Header users={user}/>
                  <Content />
                  <Footer />
                </>

                :

                <AuthRequired />
              }
            </div>
        </>
    )
}

export default Profil;