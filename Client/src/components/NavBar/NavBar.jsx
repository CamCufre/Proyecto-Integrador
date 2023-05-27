import style from './NavBar.module.css'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const checkLocalStorage = () => {
        if (!localStorage.getItem('auth')) {
            window.location.href = "/"
            return
        }
        return
    }

    return (
        <header className={style.container}>
            
            <nav className={style.navbar} >
                <Link to='/home' >
                <div className={style.home} >Home</div>   
                </Link>
                <Link to='/about' >
                <div className={style.home} >About</div>
                </Link>
                <Link to='/collection' >
                <div className={style.home} >Collection</div>
                </Link>
                <Link to='/favorites' >
                <div className={style.home} >Favorites</div>
                </Link>
            </nav>

            <button className={style.logout} onClick={checkLocalStorage} >logout</button>
        </header>
    )
};

export default NavBar;