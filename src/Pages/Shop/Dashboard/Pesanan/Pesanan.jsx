import css from "./Pesanan.module.css"
import Content from "../../../../Components/Dashboard/Pesanan/Content"
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard"


export const Pesanan = () => {
    return (
        <>
            <div className={css.container_pesanan}>
                <Content />
                <Navbar_Dashboard />
            </div>
        </>
    )
}
