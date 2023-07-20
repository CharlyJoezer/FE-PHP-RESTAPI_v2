import css from "./Beranda.module.css"
import Navbar_Dashboard from "../../../../Components/Navbar_Dashboard/Navbar_Dashboard"
import Content from "../../../../Components/Dashboard/Beranda/Content.jsx"

export const Beranda = () => {
    return (
        <>
            <div className={css.container_dashboard_shop}>
                <Content />
                <Navbar_Dashboard />
            </div>
        </> 
    )
}