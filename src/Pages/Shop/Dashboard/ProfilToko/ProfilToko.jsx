import css from "./ProfilToko.module.css"
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard";
import {Header as HeaderDashboard} from "../../../../Components/Dashboard/Components/Header/Header";
import Content from "../../../../Components/Dashboard/ProfilToko/Content";


export const ProfilToko = () => {
    return (
        <>
            <div className={css.container_profil_toko}>
                <HeaderDashboard text="Profil Toko"/>
                <Content />
                <Navbar_Dashboard />
            </div>
        </>
    )
}