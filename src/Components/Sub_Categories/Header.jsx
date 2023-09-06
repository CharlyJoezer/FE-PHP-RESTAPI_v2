import css from "./Header.module.css"
import {Link} from "react-router-dom"

const Header = (props) => {
    const {name_sub_category, category} = props
    return (
        <>
            <div className={css.container_header}>
                <div className={css.back_button} onClick={()=>{
                    window.location = `/category/${category}`
                }}>
                    <img src="/assets/icon/arrow_left.png" alt="arrow-left" />
                </div>
                <div className={css.input_search}>
                    <input type="text" name="search" placeholder={'Cari Produk '+name_sub_category.replace(/-/g, ' ')} />
                </div>
                <Link to={'/cart'} className={css.cart_link}>
                    <img src="/assets/icon/cart-icon.png" alt="cart-icon" />
                </Link>
            </div>
        </>
    );
}

export default Header;