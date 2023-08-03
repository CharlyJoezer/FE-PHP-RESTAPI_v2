import css from "./ErrorPage.module.css"

const ErrorPage = (props) =>{
    return (
        <>
            <div className={css.container_error}>
                    <img src={`/assets/errors/${props.code}.jpg`} alt="imageError" />
                {
                    props.code === '404'
                    &&
                    <div className={css.info_error}>Page Not Found.</div>
                }

                {
                    props.code === '500' &&
                    <div className={css.info_error}>Saat ini server sedang dalam masalah, Mohon maaf telah mengganggu kenyamanan anda.</div>
                }
            </div>
        </>
    )
}

export default ErrorPage;