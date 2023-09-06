import css from "./Sub_Categories.module.css"
import Header from "../../Components/Sub_Categories/Header"
import Content from "../../Components/Sub_Categories/Content"
import Navbar from "../../Components/Navbar/Navbar"
import { useParams } from "react-router-dom"

const Sub_Categories = () => {
    const params = useParams()
    document.title = params.name_sub_category.charAt(0).toUpperCase() + params.name_sub_category.slice(1) + ' | Itemku'
    return (
        <>
            <div className={css.container_sub_categories}>
                {/* <Header name_sub_category={params.name_sub_category} category={params.name_category}/> */}
                <Content category={params.name_category} name_sub_category={params.name_sub_category} name_type_category={params.typeCategory}/>
            </div>
            <Navbar />
        </>
    )   
}

export default Sub_Categories