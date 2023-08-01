import css from "./Content.module.css"
import {Link} from "react-router-dom"

const Content = (props) => {
    const data = props.data.data
    return (
        <>
            <div className={css.container_content_beranda}>
                <div className={css.main_image}>
                    <img src="https://tokoku.itemku.com/static/icon/tokoku-color.png?v=1.27.0" alt="itemku_tokoku" />
                </div>

                <div className={css.shop_profil}>
                    <div className={css.shop_profil_content}>
                        <div className={css.shop_about}>
                            <img src={data.image_shop} />
                            <div className={css.shop_about_data}>
                                <div className={css.shop_about_name}>{data.name_shop}</div>
                                <span className={css.shop_about_status}>Status : {data.status}</span>
                            </div>
                        </div>
                        
                        <Link to="/shop/dashboard/profil-toko" className={css.btn_shop_detail}>Detail Toko</Link>
                    </div>
                </div>

                <div className={css.shop_activity}>
                    <div className={css.shop_activity_title}>Aktifitas Toko</div>
                    <div className={css.list_activity}>
                        <div className={css.box_activity}>
                            <span className={css.box_activity_title}>Perlu Diproses</span>
                            <div className={css.box_activity_info}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z" fill="#FFAA00"></path> <path fillRule="evenodd" clipRule="evenodd" d="M6.5 4.03662C5.24209 4.10719 4.44798 4.30764 3.87868 4.87694C3 5.75562 3 7.16983 3 9.99826V15.9983C3 18.8267 3 20.2409 3.87868 21.1196C4.75736 21.9983 6.17157 21.9983 9 21.9983H15C17.8284 21.9983 19.2426 21.9983 20.1213 21.1196C21 20.2409 21 18.8267 21 15.9983V9.99826C21 7.16983 21 5.75562 20.1213 4.87694C19.552 4.30764 18.7579 4.10719 17.5 4.03662V4.5C17.5 6.15685 16.1569 7.5 14.5 7.5H9.5C7.84315 7.5 6.5 6.15685 6.5 4.5V4.03662ZM6.25 10.5C6.25 10.0858 6.58579 9.75 7 9.75H17C17.4142 9.75 17.75 10.0858 17.75 10.5C17.75 10.9142 17.4142 11.25 17 11.25H7C6.58579 11.25 6.25 10.9142 6.25 10.5ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H16C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14ZM8.25 17.5C8.25 17.0858 8.58579 16.75 9 16.75H15C15.4142 16.75 15.75 17.0858 15.75 17.5C15.75 17.9142 15.4142 18.25 15 18.25H9C8.58579 18.25 8.25 17.9142 8.25 17.5Z" fill="#FFAA00"></path> </g></svg>
                                <span className={css.box_activity_info_count}>{data.stats_orders.order_process}</span>
                            </div>
                        </div>
                        <div className={css.box_activity}>
                            <span className={css.box_activity_title}>Menunggu Konfirmasi</span>
                            <div className={css.box_activity_info}>
                            <svg fill="#FFAA00" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M43.3,6H41.57a.74.74,0,0,0-.67.8V10a6.37,6.37,0,0,1-6.3,6.4H17.4A6.37,6.37,0,0,1,11.1,10V6.67A.74.74,0,0,0,10.3,6H8.7A4.77,4.77,0,0,0,4,10.8V45.2A4.77,4.77,0,0,0,8.7,50H43.3A4.77,4.77,0,0,0,48,45.2V10.8A4.77,4.77,0,0,0,43.3,6ZM25.92,45a12,12,0,0,1,.16-24h0a12,12,0,0,1-.16,24Z"></path><path d="M16.91,11.6H34.77a1.59,1.59,0,0,0,1.63-1.55V6.8A4.81,4.81,0,0,0,31.6,2H20.4a4.82,4.82,0,0,0-4.8,4.8V10A1.47,1.47,0,0,0,16.91,11.6Z"></path><path d="M32.23,27.2A9.09,9.09,0,0,0,26,24.4v8.8h8.77A7.32,7.32,0,0,0,32.23,27.2Z"></path></g></svg>
                                <span className={css.box_activity_info_count}>{data.stats_orders.order_confirmation}</span>
                            </div>
                        </div>
                        <div className={css.box_activity}>
                            <span className={css.box_activity_title}>Pesanan Selesai</span>
                            <div className={css.box_activity_info}>
                            <svg fill="#FFAA00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.4,11.6h17.3c0.9,0,1.6-0.7,1.6-1.6V6.8c0-2.6-2.1-4.8-4.7-4.8h-11c-2.6,0-4.7,2.2-4.7,4.8V10 C15.8,10.9,16.5,11.6,17.4,11.6z"></path> <path d="M43.3,6h-1.6c-0.5,0-0.8,0.3-0.8,0.8V10c0,3.5-2.8,6.4-6.3,6.4H17.4c-3.5,0-6.3-2.9-6.3-6.4V6.8 c0-0.5-0.3-0.8-0.8-0.8H8.7C6.1,6,4,8.2,4,10.8v34.4C4,47.8,6.1,50,8.7,50h34.6c2.6,0,4.7-2.2,4.7-4.8V10.8C48,8.2,45.9,6,43.3,6z M36.7,27.1l-12,12c-0.5,0.5-1,0.7-1.6,0.7c-0.5,0-1.2-0.2-1.6-0.7l-5.8-5.8c-0.5-0.5-0.5-1.2,0-1.6l1.6-1.6c0.5-0.5,1.2-0.5,1.6,0 l4.2,4.2L33.4,24c0.5-0.5,1.2-0.5,1.6,0l1.6,1.6C37.1,25.9,37.1,26.7,36.7,27.1z"></path> </g> </g></svg>
                                <span className={css.box_activity_info_count}>{data.stats_orders.order_success}</span>
                            </div>
                        </div>
                        <div className={css.box_activity}>
                            <span className={css.box_activity_title}>Pesanan Dibatalkan</span>
                            <div className={css.box_activity_info}>
                            <svg fill="#FFAA00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.2,11.6h17.6c0.9,0,1.6-0.7,1.6-1.6V6.8c0-2.6-2.2-4.8-4.8-4.8H20.4c-2.6,0-4.8,2.2-4.8,4.8V10 C15.6,10.9,16.3,11.6,17.2,11.6z"></path> <path d="M43.6,6H42c-0.5,0-0.8,0.3-0.8,0.8V10c0,3.5-2.9,6.4-6.4,6.4H17.2c-3.5,0-6.4-2.9-6.4-6.4V6.8 C10.8,6.3,10.5,6,10,6H8.4c-2.6,0-4.8,2.2-4.8,4.8v34.4c0,2.6,2.2,4.8,4.8,4.8h35.2c2.6,0,4.8-2.2,4.8-4.8V10.8 C48.4,8.2,46.2,6,43.6,6z M34.3,42.4c0,1.4-1.1,2.4-2.4,2.4H20.1c-1.4,0-2.4-1.1-2.4-2.4V32.1c0-0.4,0.3-0.7,0.7-0.7h15.2 c0.4,0,0.7,0.3,0.7,0.7V42.4z M36.3,27.5c0,0.4-0.3,0.7-0.7,0.7H16.5c-0.4,0-0.7-0.3-0.7-0.7V26c0-0.4,0.3-0.7,0.7-0.7h6.1v-2 c0-1.1,0.9-2,2-2h2.9c1.1,0,2,0.9,2,2v2h6.1c0.4,0,0.7,0.3,0.7,0.7V27.5z"></path> <path d="M24,34.8h-1c-0.3,0-0.5,0.2-0.5,0.5V41c0,0.3,0.2,0.5,0.5,0.5h1c0.3,0,0.5-0.2,0.5-0.5v-5.7 C24.5,35,24.3,34.8,24,34.8z"></path> <path d="M28.9,34.8h-1c-0.3,0-0.5,0.2-0.5,0.5V41c0,0.3,0.2,0.5,0.5,0.5h1c0.3,0,0.5-0.2,0.5-0.5v-5.7 C29.4,35,29.2,34.8,28.9,34.8z"></path> <path d="M27,23.4h-2c-0.3,0-0.5,0.2-0.5,0.5v1.5h2.9v-1.5C27.5,23.6,27.3,23.4,27,23.4z"></path> </g> </g></svg>
                                <span className={css.box_activity_info_count}>{data.stats_orders.order_canceled}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.shop_balance}>
                    <div className={css.shop_balance_title}>Keuangan Toko</div>
                    <div className={css.shop_balance_info}>
                        <div className={css.transaction_success_box}>
                            <div className={css.transaction_title}>Saldo Toko</div>
                            <div className={css.transaction_info}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 15C2.79 15 1 16.79 1 19C1 19.75 1.21 20.46 1.58 21.06C2.27 22.22 3.54 23 5 23C6.46 23 7.73 22.22 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM6.97 18.67L4.84 20.64C4.7 20.77 4.51 20.84 4.33 20.84C4.14 20.84 3.95 20.77 3.8 20.62L2.81 19.63C2.52 19.34 2.52 18.86 2.81 18.57C3.1 18.28 3.58 18.28 3.87 18.57L4.35 19.05L5.95 17.57C6.25 17.29 6.73 17.31 7.01 17.61C7.29 17.91 7.27 18.39 6.97 18.67Z" fill="#307FE2"></path> <path d="M17.7495 7.04997C17.5095 7.00997 17.2595 6.99998 16.9995 6.99998H6.99945C6.71945 6.99998 6.44945 7.01998 6.18945 7.05998C6.32945 6.77998 6.52945 6.52001 6.76945 6.28001L10.0195 3.02C11.3895 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.78996C17.3695 5.41996 17.7095 6.21997 17.7495 7.04997Z" fill="#307FE2"></path> <path opacity="0.4" d="M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" fill="#307FE2"></path> <path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" fill="#307FE2"></path> </g></svg>
                                <span className={css.transaction_balance_amount}>Rp 0</span>
                            </div>
                        </div>
                        <div className={css.transaction_process_box}>
                            <div className={css.transaction_title}>Transaksi diproses</div>
                            <div className={css.transaction_info}>
                            <svg fill="#307FE2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="swap"> <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect> <path d="M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2z"></path> <path d="M20 16H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21 1 1 0 0 0 .79-.39 1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2z"></path> </g> </g> </g></svg>
                                <span className={css.transaction_balance_amount}>Rp 0</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.shop_statistic}>
                    <div className={css.shop_statistic_title}>
                        <div>Statistik Toko</div>
                        <span>Dalam 30 Hari terakhir</span>
                    </div>
                    <div className={css.shop_statistic_list}>
                        <div className={css.shop_statistic_item}>
                            <span className={css.shop_statistic_item_title}>Jumlah Pembeli</span>
                            <div className={css.shop_statistic_item_info}>
                                <svg fill="#307FE2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#307FE2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg>
                                <span className={css.amount}>{data.last_30_days_stats_order.amount_buyer}</span>
                            </div>
                        </div>
                        <div className={css.shop_statistic_item}>
                            <span className={css.shop_statistic_item_title}>Pesanan Selesai</span>
                            <div className={css.shop_statistic_item_info}>
                                <svg fill="#307FE2" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24 35.33a.81.81 0 0 1 .81.71v11.52a2.44 2.44 0 0 1 -2.32 2.44h-16.42a2.45 2.45 0 0 1 -2.44-2.28v-11.57a.81.81 0 0 1 .71-.81h19.66zm23.61 0a.82.82 0 0 1 .81.71v11.52a2.44 2.44 0 0 1 -2.33 2.44h-16.42a2.44 2.44 0 0 1 -2.43-2.28v-11.57a.81.81 0 0 1 .71-.81h19.61zm-29.92 3.37-.09.07-4.6 5.06-2.11-2a.62.62 0 0 0 -.79-.07l-.08.07-.87.78a.49.49 0 0 0 -.07.71l.07.08 3 2.83a1.25 1.25 0 0 0 .87.36 1.15 1.15 0 0 0 .87-.36l5.52-5.84a.63.63 0 0 0 .06-.72l-.06-.07-.87-.78a.61.61 0 0 0 -.85-.12zm23.61 0-.09.07-4.66 5.06-2.11-2a.61.61 0 0 0 -.78-.07l-.09.07-.87.78a.49.49 0 0 0 -.06.71l.06.08 3 2.83a1.25 1.25 0 0 0 .87.36 1.14 1.14 0 0 0 .87-.36l5.56-5.89a.65.65 0 0 0 0-.72v-.07l-.87-.78a.61.61 0 0 0 -.83-.07zm-18.76-11.52a2.36 2.36 0 0 1 2.27 2.28v2.61a.81.81 0 0 1 -.66.81h-21.39a.78.78 0 0 1 -.76-.7v-2.55a2.38 2.38 0 0 1 2.13-2.44h18.41zm25.18 0a2.36 2.36 0 0 1 2.28 2.28v2.61a.81.81 0 0 1 -.66.81h-21.4a.78.78 0 0 1 -.75-.71v-2.54a2.38 2.38 0 0 1 2.13-2.44h18.4zm-12-17a.81.81 0 0 1 .8.71v11.48a2.44 2.44 0 0 1 -2.28 2.44h-16.37a2.46 2.46 0 0 1 -2.44-2.29v-11.52a.81.81 0 0 1 .71-.8h19.62zm-6.27 3.37-.08.07-4.66 5.06-2.11-2a.61.61 0 0 0 -.78-.07l-.09.07-.87.78a.5.5 0 0 0 -.07.71l.07.08 3 2.82a1.22 1.22 0 0 0 .87.37 1.13 1.13 0 0 0 .87-.37l5.53-5.83a.65.65 0 0 0 .05-.72l-.05-.07-.87-.78a.62.62 0 0 0 -.77-.15zm6.31-11.55a2.44 2.44 0 0 1 2.43 2.28v2.61a.83.83 0 0 1 -.71.81h-22.86a.81.81 0 0 1 -.81-.7v-2.56a2.44 2.44 0 0 1 2.27-2.44z"></path></g></svg>
                                <span className={css.amount}>{data.last_30_days_stats_order.success_orders}</span>
                            </div>
                        </div>
                        <div className={css.shop_statistic_item}>
                            <span className={css.shop_statistic_item_title}>Pesanan Dibatalkan</span>
                            <div className={css.shop_statistic_item_info}>
                                <svg fill="#307FE2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M28.6,11.4h5.1c0.6,0,1.1-0.5,1.1-1.1c0-0.3-0.1-0.5-0.3-0.8l-7.2-7.1c-0.2-0.2-0.4-0.3-0.7-0.3 c-0.6,0-1.1,0.5-1.1,1.1v5.1C25.5,10,26.9,11.4,28.6,11.4z"></path> <path d="M24.6,40.6c0-6.8,4.2-12.6,10.2-14.9v-8.1c0-0.9-0.7-1.6-1.6-1.6h-7.8c-2.6,0-4.7-2.1-4.7-4.6V3.6 c0.1-0.8-0.6-1.5-1.5-1.5H6.8c-2.6,0-4.7,2.1-4.7,4.6v29.4c0,2.6,2.1,4.6,4.7,4.6h17.8C24.6,40.7,24.6,40.6,24.6,40.6z"></path> </g> <path d="M31.8,34.6l6,6l-6,6c-0.6,0.6-0.6,1.6,0,2.1l0.7,0.7c0.6,0.6,1.6,0.6,2.1,0l6-6l6,6c0.6,0.6,1.6,0.6,2.1,0 l0.7-0.7c0.6-0.6,0.6-1.6,0-2.1l-6-6l6-6c0.6-0.6,0.6-1.6,0-2.1l-0.7-0.7c-0.6-0.6-1.6-0.6-2.1,0l-6,6l-6-6c-0.6-0.6-1.6-0.6-2.1,0 l-0.7,0.7C31.2,33,31.2,34,31.8,34.6z"></path> </g> </g></svg>
                                <span className={css.amount}>{data.last_30_days_stats_order.canceled_orders}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Content