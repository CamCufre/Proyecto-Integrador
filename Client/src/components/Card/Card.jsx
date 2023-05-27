import React from 'react';
import { connect } from 'react-redux';
import { removeFav, addFav } from '../redux/actions';
import { useState, useEffect } from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ id, name, status, species, gender, origin, image, onClose, myFavorites, removeFav, addFav }) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      removeFav(id);
    } else if (isFav === false) {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose });
    }
  };

  useEffect(() => { 
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const containerStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={style.container} style={containerStyle}>
      {isFav ? (
        <button className={style.boton} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.boton} onClick={handleFavorite}>
          🤍
        </button>
      )}

      <Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>

      <h2 className={style.data}>Status : {status}</h2>

      <h2 className={style.data}>Species : {species}</h2>

      <h2 className={style.data}>Gender : {gender}</h2>

      <h2 className={style.data}>Origin : {origin}</h2>

      <button className={style.button} onClick={() => onClose(id)}>
        x
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);