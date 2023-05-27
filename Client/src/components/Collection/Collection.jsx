import axios from 'axios';
import { useState } from 'react';
import Cards from '../Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import style from './Collection.module.css'

const Collection = () => {

    const onClose = (id) => {
        const charactersFiltered = characters.filter(character => character.id !== Number(id)) 
        setCharacters(charactersFiltered)
     };
  
     const [characters,setCharacters] = useState([]);

     const [requestedIds, setRequestedIds] = useState([]);

     const onSearch = async (id) => {
      try {
        if (requestedIds.includes(id)) {
          window.alert('¡Este ID ya fue solicitado!');
        } else {
          const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
          const { data } = response;
    
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            setRequestedIds((oldIds) => [...oldIds, id]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    return(
        <div>
            <div className={style.search} >
            <SearchBar onSearch={onSearch} />
            </div>
            
            <Cards characters={characters} onClose={onClose}/>
        </div>
    )
}

export default Collection;