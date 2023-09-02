import css from "./Cart.module.css"
import Content from '../../Components/Cart/Content'
import HeaderTitleAndBack from "../../Components/HeaderTitleAndBack"

const Cart = () => {
    document.title = 'Keranjang | Itemku'
    return (
        <>
            <div className={css.container_cart}>
                <HeaderTitleAndBack title="Keranjang"/>
                <Content />
            </div>
        </>
    )
}

export default Cart