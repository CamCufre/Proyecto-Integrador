import { connect } from 'react-redux'
import Card from '../Card/Card'
import style from './Favorites.module.css'
import { filterCards, orderCards } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Favorite = ({myFavorites}) => {
    const [aux, setAux] = useState(false)

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }; 

    return (
        <div className={style.container} > 
        <select className={style.selector} onChange={handleOrder}>
            <option className={style.option} value='A'>Ascendente</option>
            <option className={style.option} value='D'>Descendente</option>
        </select>
        <select className={style.selector1} onChange={handleFilter}>
            <option className={style.option} value='Male'>Male</option>
            <option className={style.option} value='Female'>Female</option>
            <option className={style.option} value='Gendeless'>Genderless</option>
            <option className={style.option} value='unknown'>unknown</option>
        </select>
            {myFavorites.map((character) =>(
            <Card
            id={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            /> 
            ))}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorite);