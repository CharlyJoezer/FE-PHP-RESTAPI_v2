import { useEffect, useState } from "react";
import { Cookie } from "./Cookies";

export async function AuthCheck(){
        const token = Cookie(' itemku_token')
        const url = "http://127.0.0.1:8000/api/auth/get-user-data"
        const request = await fetch(url,{
            method : 'GET',
            headers: {
                'Authorization' : token
            }
        })
        return true;
        // const status = request.status
        // if(status === 200){
        //     return true;
        // }else{
        //     return false;
        // }
    }   

