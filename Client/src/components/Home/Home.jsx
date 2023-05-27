import style from './Home.module.css'
import img from './musicjudge.png'

const Home = ()=>{
    return(
        <div className={style.container}>
            <h1 className={style.h1} >SHOW ME WHAT YOU GOT.</h1>
            <h2 className={style.welcome}>Welcome</h2><span className={style.exc}>!</span>
            <h3 className={style.collect} >Wanna collect some cards?</h3>
            <h3 className={style.check} >CHECK OUT THE COLLECTION!</h3>
            <div>
                <img className={style.cabeza} src={img} alt='' />
            </div>
        </div>
    )
}

export default Home;