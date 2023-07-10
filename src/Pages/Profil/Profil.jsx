import css from "../Profil/Profil"
import {useState, useEffect} from "react"
import Navbar from "../../Components/Navbar/Navbar"
import {Cookie} from "../../Auth/Cookies"
import Header from "../../Components/Profil/Header"
import Content from "../../Components/Profil/Content"
import Footer from "../../Components/Profil/Footer"

const Profil = () => {
    document.title = 'Profil'
    const token = Cookie(' itemku_token')
    const [user, setDataUser] = useState([])
  
    useEffect(function(){
      if(token === undefined){
        console.error('Login required')
      }else{
        async function getUserData(token){
          const url = "http://localhost:8000/api/user/profil"
          const request = await fetch(url,{
            method : 'POST',
            headers : {
              'Authorization' : token
            }
          })
  
          const response = await request.json()
  
          if(request.ok){
            setDataUser(response.data)
          }
        }
        getUserData(token)
      }
    }, [])
    return (
        <>
            <Navbar users={user}/>
            <div className={css.container_profil}>
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    )
}

export default Profil;