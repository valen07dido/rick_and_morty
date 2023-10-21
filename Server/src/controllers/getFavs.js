
const { Favorite } = require("../DB_connection");

const getFav = async (req, res) => {
    try {
        const Favoritos= await Favorite.findAll()
        res.status(200).json(Favoritos)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}
 
module.exports=getFav