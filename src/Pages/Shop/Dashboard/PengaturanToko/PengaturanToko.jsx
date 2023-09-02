import css from "./PengaturanToko.module.css"
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard"
import { Header } from "../../../../Components/Dashboard/Components/Header/Header"
import Content from "../../../../Components/Dashboard/PengaturanToko/Content"

export const PengaturanToko = () => {
    document.title = 'Pengaturan | Dashboard'
    return (
        <>
            <div className={css.container_pengaturan_toko}>
                <Header text="Pengaturan Toko" />
                <Content />
                <Navbar_Dashboard />
            </div>
        </>
    )
}