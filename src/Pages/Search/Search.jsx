import css from "./Search.module.css"
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import Header from "../../Components/Search/Header"
import Content from "../../Components/Search/Content";

const Search = () => {
    const {query_search} = useParams()
    return (
        <>
            <div className={css.container_search}>
                <Header search={query_search}/>
                <Content  search={query_search}/>
            </div>
            <Navbar />
        </>
    );
}

export default Search;