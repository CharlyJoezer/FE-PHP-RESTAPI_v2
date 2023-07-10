import Navbar from "../../Components/Navbar/Navbar.jsx";
import Slider from "../../Components/Home/Slider.jsx";
import Category from "../../Components/Home/Category.jsx";
import Product from "../../Components/Home/Product.jsx";
import css from "../Home/Home.module.css";
import {Cookie} from '../../Auth/Cookies.js'
import { useEffect, useState } from "react";
import Header from "../../Components/Home/Header.jsx"

const Home = () => {
  document.title = "Itemku";
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
      <Navbar users={user} />
      <div className={css.container_home}>
        <Header />
        <Slider />
        <Category />
        <Product />
      </div>
    </>
  );
};

export default Home;
