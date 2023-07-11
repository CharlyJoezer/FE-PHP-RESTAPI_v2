import css from "../../Components/AuthRequired/AuthRequired.module.css"
import {Link} from "react-router-dom"

const AuthRequired = () => {
    return (
        <>
            <div className={css.AuthRequired}>
                <img src="https://files.itemku.com/illustration/tokoku/login/seller-login.png" alt="https://files.itemku.com/illustration/tokoku/login/seller-login.png"/>
                <Link to="/login" className={css.login_btn}>Masuk</Link>
            </div>
        </>
    )
}

export default AuthRequired;