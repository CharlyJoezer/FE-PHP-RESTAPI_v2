import css from "./BuatProduk.module.css"
import NavbarDashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard"
import Content from "../../../../Components/Dashboard/BuatProduk/Content"

export const BuatProduk = () => {
    return (
        <>
            <div className={css.container_buat_produk}>
                <Content />
                <NavbarDashboard />
            </div>
        </>
    )
}
