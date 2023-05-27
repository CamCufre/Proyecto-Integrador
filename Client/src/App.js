import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';
import Form from './components/Form/Form.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Cards from './components/Cards/Cards.jsx';
import Collection from './components/Collection/Collection.jsx';
import Favorites from './components/Favorites/Favorites.jsx'
import Error from './components/Error/Error.jsx';
import axios from 'axios';

function App() {

   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const updateBackground = () => {
      const { pathname } = window.location;
      document.body.className = pathname.slice(1);
   };
    
    window.onpopstate = updateBackground;
    updateBackground();

   useEffect(() => {
      !access && navigate('/');
      // eslint-disable-next-line
   }, [access]);

   const login = async (userData) => {
      try {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        const response = await axios(`${URL}?email=${email}&password=${password}`);
        const { data } = response;
        const { access } = data;
    
        setAccess(data);
        access && navigate('/home');
      } catch (error) {
        console.error(error);
      }
    };

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id)) 
      setCharacters(charactersFiltered)
   };

   const [characters,setCharacters] = useState([]);

   return (
      <div className='App'>

        {location.pathname !== '/' && <NavBar/>}

         <Routes>
         
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/details/:id' element={<Details/>}/>
         <Route path='/collection' element={<Collection/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
         <Route path='*' element={<Error/>}/>

         </Routes>

         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
