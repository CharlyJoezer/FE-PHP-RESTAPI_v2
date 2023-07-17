import css from "../Profil/Profil.module.css"
import {useState, useEffect} from "react"
import Navbar from "../../Components/Navbar/Navbar"
import {Cookie} from "../../Auth/Cookies"
import Header from "../../Components/Profil/Header"
import Content from "../../Components/Profil/Content"
import Footer from "../../Components/Profil/Footer"
import AuthRequired from "../../Components/AuthRequired/AuthRequired.jsx"
import Loading from "../../Components/Loading/Loading"

const Profil = () => {
    document.title = 'Profil'
    const token = Cookie(' itemku_token')
    const [user, setDataUser] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function(){
      if(token === undefined){
        setLoading(false)
      }else{
        async function getUserData(token){
          const url = "http://127.0.0.1:8000/api/auth/get-user-data"
          const request = await fetch(url,{
            method : 'GET',
            headers : {
              'Authorization' : token
            }
          })
  
          const response = await request.json()
  
          if(request.ok){
            setDataUser(response.data)
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
                token !== undefined ?
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