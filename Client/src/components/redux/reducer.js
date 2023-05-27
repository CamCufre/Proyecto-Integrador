const initialState = {
    myFavorites:[],
    allCharacters:[]
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case 'ADD_FAV':
        return { 
            ...state,
            myFavorites: [...state.myFavorites, payload],
            allCharacters: [...state.allCharacters, payload]
        };
        case 'REMOVE_FAV':
            const updatedFavorites = state.myFavorites.filter(fav => fav.id !== payload);
            return { 
            ...state, 
            myFavorites: updatedFavorites,
            allCharacters: [...state.allCharacters, ...updatedFavorites]
            };
        case 'FILTER':
        const allCharactersFilter = state.allCharacters.filter(char => char.gender === payload);
        const filteredFavorites = state.myFavorites.filter(fav => fav.gender === payload);
        return {
            ...state,
            myFavorites: filteredFavorites,
            allCharacters: allCharactersFilter
        };
        case 'ORDER':
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites: payload==='A'
                ?allCharactersCopy.sort((a, d)=>a.id < d.id)
                :allCharactersCopy.sort((a, d)=>d.id < a.id)
            }
        default:
        return {
            ...state
        }
    }
}

export default reducer;