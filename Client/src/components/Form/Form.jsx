import { useState } from 'react';
import validation from '../Validation/Validation';
import style from './Form.module.css';
import gif from './ww2.gif';

const Form = ({login}) => {

    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }


    return(
        <form className={style.container} onSubmit={handleSubmit}>
            <img className={style.rick} src={`${gif}?${new Date().getTime()}`} alt='Rick and Morty' autoPlay />
            <h2 className={style.h2} >Wubba lubba dub dub!</h2>
            <label className={style.labele} htmlFor='email'>Email</label>
            <input className={style.inpute} type="email" name='email' value={userData.email} onChange={handleChange}/>
            <hr className={style.hre} ></hr>
            {errors.email && <p className={style.p} >{errors.email}</p>}
            
            <label className={style.labelp} htmlFor="password">Password</label>
            <input className={style.inputp} type="password" name="password" value={userData.password} onChange={handleChange}/>
            <hr className={style.hrp} ></hr>
            {errors.password && <p className={style.p} >{errors.password}</p>}
            
            <button className={style.submit} >LOGIN</button>
        </form>
    )
}

export default Form;