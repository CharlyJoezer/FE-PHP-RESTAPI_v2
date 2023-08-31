import css from "../Profil/Profil.module.css"
import {useState, useEffect} from "react"
import Navbar from "../../Components/Navbar/Navbar"
import {Cookie} from "../../Auth/Cookies"
import Header from "../../Components/Profil/Header"
import Content from "../../Components/Profil/Content"
import AuthRequired from "../../Components/AuthRequired/AuthRequired.jsx"
import Loading from "../../Components/Loading/Loading"
import BASEURL from "../../Utils/baseURL"
import ErrorPage from "../../Pages/Errors/ErrorPage"
import ModalEditProfil from "../../Components/Profil/ModalEditProfil"

const Profil = () => {
    document.title = 'Profil'
    const token = Cookie('itemku_token')
    const [user, setDataUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [auth, setAuth] = useState(false)
    const [errorRequest = {
      show : false,
      code : null
    }, setErrorRequest] = useState([])
    const [modalEditProfil = {
      show: false,
      data: {},
    }, setModalEditProfil] = useState([])

    useEffect(function(){
      if(token === undefined){
        setLoading(false)
      }else{
        async function getUserData(token){
          try{
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
            }else if(request.status === 403){
              setAuth(false)
              setLoading(false)
            }else if(request.status === 404){
              setAuth(false)
              setLoading(false)
            }else{
              throw new Error(500); 
            }

          }catch(error){
            setErrorRequest({show : true, code : isNaN(error.message) ? '500' : error.message})
          }
        }
        getUserData(token)
      }
    }, [])
    return (
        <>
          {errorRequest.show ? 
            <ErrorPage code={errorRequest.code} />
            :
            <>
              <Navbar users={user}/>
              <div className={css.container_profil}>
                {loading ? <Loading /> :
                  auth ?
                  <>
                    <Header users={user} modalEditProfil={setModalEditProfil}/>
                    <Content />
                    {modalEditProfil.show && <ModalEditProfil users={modalEditProfil.data} closeModal={setModalEditProfil}/>}
                  </>

                  :

                  <AuthRequired />
                }
              </div>
            </>
          }
        </>
    )
}

export default Profil;