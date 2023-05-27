import style from './About.module.css';
import img from './avatar.png'

const About = ()=>{
    return(
        <div className={style.container} >
            <img src={img} alt='alta-foteli' className={style.avatar} />
            <h1 className={style.titulo} >About'nt</h1>
            <p className={style.muchotexto} >Estoy aprendiendo a desarrollar y creo que desgraciadamente perdí muchas horas en CSS pero no me arrepiento de nada.
            </p>
            <p className={style.muchotexto1} >Aquí a la derecha puedes apreciar mi bella apariencia durante todo el M2 :)
            </p>
            <h3 className={style.firma} >Camila Cufré - niña rata -</h3>
        </div>
    )
}

export default About;