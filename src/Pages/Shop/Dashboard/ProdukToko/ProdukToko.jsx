import { Header } from "../../../../Components/Dashboard/Components/Header/Header"
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard"
import css from "./ProdukToko.module.css"
import Content from "../../../../Components/Dashboard/ProdukToko/Content"

export const ProdukToko = () =>{
    return (
        <>
            <div className={css.container_produk_toko}>
                <Header text="Produk Toko"/>
                <Content />
                <Navbar_Dashboard />
            </div>
        </>
    )
}