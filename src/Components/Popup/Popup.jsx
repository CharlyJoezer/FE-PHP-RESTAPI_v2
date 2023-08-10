import { useEffect, useRef, useState } from "react";
import css from "./Popup.module.css"

const Popup = (props) => {
    const {status, message, refresh} = props
    const [showPopup, setShowPopup] = useState(true)
    const popup = useRef(null)


    function goDown(){
        popup.current.style.transform = 'translateY(0)';
        popup.current.style.top = '15px';
    }

    function goUp(){
        popup.current.style.transform = 'translateY(-100%)';
        popup.current.style.top = '0';
    }

    useEffect(function(){
        goDown()
        setTimeout(() => {
            goUp()
            refresh && window.location.reload()
        }, 3000);
    },[])
    return (
        <>  
            <div className={css.popup} ref={popup} style={{
                    borderLeft: status === 'Success' ? '6px solid #4ECC63' : '6px solid #FE6464'
                 }}>
                <div className={css.popup_icon}>
                    {status == 'Success' && <img src="/assets/icon/success.png" alt="success_icon" />}
                    {status == 'Failed' && <img src="/assets/icon/failed.png" alt="success_icon" />}
                </div>
                <div className={css.popup_text}>
                    <div className={css.title}>{status}</div>
                    <span className={css.message}>{message}</span>
                </div>
                <div className={css.close_popup}>
                    <span onClick={()=>{
                        goUp()
                    }}>Close</span>
                </div>
            </div>
        </>
    )
}

export default Popup;