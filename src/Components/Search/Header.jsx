import { useNavigate } from "react-router-dom";
import css from "./Header.module.css"
import { useRef } from "react";

const Header = (props) =>{
    const {search} = props;
    document.title = search.replace(/-/g, ' ')+' | Itemku'
    const navigate = useNavigate()
    const inputSearchHeader = useRef()
    return (
        <>
            <div className={css.container_header}>
                <div className={css.back_button} 
                    onClick={()=>{
                        window.history.back()
                    }}
                >
                    <img src="/assets/icon/arrow_left.png" alt="arrow-left-icon"/>
                </div>
                <div className={css.input_search}>
                    <div style={{position:'relative'}}>
                        <input 
                            type="text"
                            ref={inputSearchHeader}
                            defaultValue={search.replace(/-/g,' ')} 
                            onKeyDown={(e)=>{
                                if(e.key === 'Enter'){
                                    if(e.target.value.length > 0){
                                        const filterSearch = e.target.value.replace(/ /g, "-");
                                        navigate('/search/'+filterSearch)
                                    }
                                }
                            }}
                        />
                               
                        <img src="/assets/icon/search-icon.png" alt="search-icon" onClick={()=>{
                            const getInput = inputSearchHeader
                            const inputValue = getInput.current.value
                            if(inputValue.length > 0){
                                const filterSearch = inputValue.replace(/ /g, "-");
                                navigate('/search/'+filterSearch)
                            }
                        }}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;












