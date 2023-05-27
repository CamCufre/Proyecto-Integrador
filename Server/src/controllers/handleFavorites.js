let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    myFavorites.push(character);
    res.json(character);
};

const deleteFav = (req, res) => {
    const { id } = req.params;  // Corrección en esta línea
    myFavorites = myFavorites.filter(character => character.id !== Number(id));
    res.json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
};