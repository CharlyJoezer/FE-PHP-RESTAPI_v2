import { useEffect, useState } from "react";
import css from "./Content.module.css"
import {Cookie} from "../../../Auth/Cookies"
import ErrorPage from "../../../Pages/Errors/ErrorPage";
import Loading from "../../../Components/Loading/Loading"
import BASEURL from "../../../Utils/baseURL";
import {useNavigate} from "react-router-dom"

const Content = () => {
    const [request, setRequest] = useState({status : 'perlu-diproses'})
    const [loading, setLoading] = useState(true)
    const [
        error = {
          show: false,
          code: null,
        },
        setError,
      ] = useState([]);
    const [dataOrder, setDataOrder] = useState([])

    const token = Cookie(" itemku_token")
    const navigate = useNavigate()

    
    useEffect(function(){
        async function sendRequest(statusOrder){
            try{
                const url = BASEURL()+"/api/shop/dashboard/pesanan/"+statusOrder
                const request = await fetch(url, {
                    method : 'GET',
                    headers : {
                        Authorization : token
                    }
                })

                if(request.status === 404){
                    navigate('/shop/create')
                }else if(request.status === 403){
                    navigate('/login')
                }else if(request.status === 500){
                    throw new Error("500")
                }else{
                    const response = await request.json()
                    setLoading(false)
                    setDataOrder(response.data)
                }
                
            }catch(error){
                setLoading(false)
                setError({show : true, code : isNaN(error.message) ? "500" : error.message})
            }
        }
        sendRequest(request.status)
    }, [request])


    return (
        <>
        {error.show ? 
            <ErrorPage code={error.code} />
        :
            <div className={css.container_content}>
                
                <div className={css.list_order_status}>
                    <div className={css.order_status_item} style={{
                        backgroundColor : request.status === 'perlu-diproses' ? '#0091FF' : 'white',
                        color : request.status === 'perlu-diproses' ? 'white' : 'black'
                    }} onClick={()=>{
                        setLoading(true)
                        setRequest({status : 'perlu-diproses'})
                    }}>
                        <span>Perlu diproses</span>
                    </div>
                    <div className={css.order_status_item} style={{
                        backgroundColor : request.status === 'menunggu-konfirmasi' ? '#0091FF' : 'white',
                        color : request.status === 'menunggu-konfirmasi' ? 'white' : 'black'
                    }} onClick={()=>{
                        setLoading(true)
                        setRequest({status : 'menunggu-konfirmasi'})
                    }}>
                        <span>Menunggu konfirmasi</span>        
                    </div>
                    <div className={css.order_status_item} style={{
                        backgroundColor : request.status === 'pesanan-selesai' ? '#0091FF' : 'white',
                        color : request.status === 'pesanan-selesai' ? 'white' : 'black'
                    }} onClick={()=>{
                        setLoading(true)
                        setRequest({status : 'pesanan-selesai'})
                    }}>
                        <span>Pesanan selesai</span>
                    </div>
                    <div className={css.order_status_item} style={{
                        backgroundColor : request.status === 'pesanan-dibatalkan' ? '#0091FF' : 'white',
                        color : request.status === 'pesanan-dibatalkan' ? 'white' : 'black'
                    }} onClick={()=>{
                        setLoading(true)
                        setRequest({status : 'pesanan-dibatalkan'})
                    }}>
                        <span>Pesanan dibatalkan</span>
                    </div>
                </div>


                        <div className={css.list_orders}>
                            {loading ?
                                <div style={{textAlign: 'center'}}>
                                    <img style={{width: '80px',paddingTop: '100px'}} src="/assets/image/loading_order.gif" alt="loading_order" />
                                </div>
                            :
                                dataOrder.length <= 0 
                                ?
                                    <div className={css.data_not_found}>
                                        <img src="/assets/image/empty_order.webp" alt="" />
                                        <span>Pesanan tidak ditemukan!</span>
                                    </div>
                                :
                                    dataOrder.map((item) => {
                                        return (
                                        <div className={css.box_order} key={item.order_code}>
                                            <div className={css.order_status} style={{color:'white', backgroundColor: 'orange',fontWeight : 'bold'}}>
                                                {
                                                    request.status === 'perlu-diproses'?'Perlu Diproses'
                                                    :
                                                    request.status === 'menunggu-konfirmasi'?'Menunggu Konfirmasi'
                                                    :
                                                    request.status === 'pesanan-selesai'?'Pesanan Selesai'
                                                    :
                                                    'Pesanan Dibatalkan'

                                                }
                                            </div>
                                            <div className={css.wrapper_order_data}>
                                                <div className={css.order_data_and_buyer_1}>
                                                    <div className={css.order_time_and_id}>
                                                        <div className={css.order_time}>{item.created_at}</div>
                                                        <div className={css.order_id}>{item.order_code}</div>
                                                    </div>
                                                    <div className={css.order_buyer_and_chat}>
                                                        <div className={css.order_buyer}>{item.users.username}</div>
                                                        <div className={css.btn_chat}>Hubungi Pembeli</div>
                                                    </div>
                                                </div>
                                            
                                                <div className={css.order_hor_line}></div>

                                                <div className={css.order_data_and_buyer_2}>
                                                    <div className={css.order_product_name}>{item.products.name_product}</div>
                                                    <div className={css.order_product_category}>{item.products.sub_categories.name_sub_category}</div>
                                                    <div className={css.order_amount}>{item.amount} Akun</div>
                                                    <div className={css.order_price}>Rp {item.products.price_product}</div>
                                                </div>
                                                
                                                <div className={css.order_hor_line}></div>

                                                <div className={css.write_note}>
                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3F89E4"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z" fill="#3F89E4"></path> <path d="M15.0603 19.3901C14.4403 19.8101 13.6603 20.1601 12.7103 20.4701L11.1303 20.9901C7.16034 22.2701 5.07034 21.2001 3.78034 17.2301L2.50034 13.2801C1.22034 9.3101 2.28034 7.2101 6.25034 5.9301L7.83034 5.4101C8.24034 5.2801 8.63034 5.1701 9.00034 5.1001C8.70034 5.7101 8.46034 6.4501 8.26034 7.3001L7.28034 11.4901C6.30034 15.6701 7.59034 17.7301 11.7603 18.7201L13.4403 19.1201C14.0203 19.2601 14.5603 19.3501 15.0603 19.3901Z" fill="#3F89E4"></path> <path d="M17.4894 10.51C17.4294 10.51 17.3694 10.5 17.2994 10.49L12.4494 9.26002C12.0494 9.16002 11.8094 8.75002 11.9094 8.35002C12.0094 7.95002 12.4194 7.71002 12.8194 7.81002L17.6694 9.04002C18.0694 9.14002 18.3094 9.55002 18.2094 9.95002C18.1294 10.28 17.8194 10.51 17.4894 10.51Z" fill="#3F89E4"></path> <path d="M14.5592 13.8899C14.4992 13.8899 14.4392 13.8799 14.3692 13.8699L11.4592 13.1299C11.0592 13.0299 10.8192 12.6199 10.9192 12.2199C11.0192 11.8199 11.4292 11.5799 11.8292 11.6799L14.7392 12.4199C15.1392 12.5199 15.3792 12.9299 15.2792 13.3299C15.1992 13.6699 14.8992 13.8899 14.5592 13.8899Z" fill="#3F89E4"></path> </g></svg>
                                                    <span>Tulis Catatan</span>
                                                </div>

                                                <div className={css.order_hor_line}></div>

                                                <div className={css.total_earn}>
                                                    <div>Pendapatan Bersih</div>
                                                    <div>Rp 4.550</div>
                                                </div>
                                                
                                                {request.status == 'perlu-diproses' &&
                                                    <div className={css.btn_order_action}>
                                                        <button className={css.btn_send_product}>Kirim Pesanan</button>
                                                        <button className={css.btn_cancel_product}>Batalkan Pesanan</button>
                                                    </div>
                                                }

                                            </div> 
                                        </div>
                                        )
                                    })
                            }
                        </div>
            </div>
        }
        </>
    )
}

export default Content;