import style from './SearchBar.module.css'
import { useState } from 'react';
import img from './lupa.png'

export default function SearchBar(props) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)

   }

   return (
      <div className={style.container}>
         <input className={style.input} type='search' onChange={handleChange} placeholder=' Type a number' value={id} />
         <button className={style.button} onClick={()=>props.onSearch(id)}>
            <img src={img} alt='buscar' className={style.icon} />
         </button>
      </div>
   );
}
