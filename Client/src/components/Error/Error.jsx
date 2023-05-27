import style from './Error.module.css'

const Error = () => {
    return(
        <div className={style.container} >
            <h1 className={style.error} >ERROR 404: Not found.</h1>
        </div>
    )
}

export default Error;