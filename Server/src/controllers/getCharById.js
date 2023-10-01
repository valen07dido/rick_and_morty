const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  let { id } = req.params;

  try {
    const response = await axios.get(URL + id);
    const { name, gender, species, origin, image, status } = response.data;

    let character = {
      id: id,
      status,
      name,
      species,
      origin: origin.name,
      image,
      gender,
    };

    if (character.name) {
      res.json(character);
    } else {
      res.status(404).send("character not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = getCharById;
