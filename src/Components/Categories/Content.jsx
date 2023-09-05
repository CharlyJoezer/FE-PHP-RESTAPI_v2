import { useEffect, useState } from "react";
import css from "./Content.module.css"
import { Link } from "react-router-dom";
import BASEURL from "../../Utils/baseURL";

const Content = (props) =>{
    const {list_sub_category} = props
    return(
        <>
            <div className={css.container_content}>
                <div className={css.list_sub_category}>
                {
                    list_sub_category.map((i)=>{
                        return (
                            <>
                                <Link className={css.box_sub_category}>
                                    <div className={css.wrapper_image}>
                                        <img src={BASEURL()+'/api/image/sub_categories/'+i.image} alt="" />
                                    </div>
                                    <div className={css.name_sub_category}>
                                        {i.name}
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default Content;