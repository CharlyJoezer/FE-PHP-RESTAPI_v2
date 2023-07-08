import css from "../Loading/Loading.module.css"

const Loading = () => {
    return (
        <div className={css.wrapper_loading}>
            <img src="assets/gif/loading.gif" alt="" />
        </div>
    )
}

export default Loading;