const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  let { name, origin, status, image, species, gender } = req.body;
  try {
      if (name && origin && status && image && species && gender) {
        console.log('aca llego')
      await Favorite.findOrCreate({
        where: { name, origin, status, image, species, gender },
      });
      const myFavorites = await Favorite.findAll();
      return res.status(201).json(myFavorites);
    }
    return res.status(200).json(myFavorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports=postFav
