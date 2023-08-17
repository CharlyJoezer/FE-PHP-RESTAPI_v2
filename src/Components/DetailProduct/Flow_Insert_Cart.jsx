import css from "./Flow_Insert_Cart.module.css"

const Flow_Insert_Cart = () => {
    return (
        <>
            <div className={css.container_flow_insert_cart}>
                <div className={css.list_action}>
                    <div className={css.start_chat}>
                        <img src="/assets/icon/message.png" alt="message" />
                    </div>
                    <div className={css.checkout_product}>
                        <span>Beli Langsung</span>
                    </div>
                    <div className={css.insert_cart}> +Keranjang</div>
                </div>
            </div>
        </>
    )
}

export default Flow_Insert_Cart;