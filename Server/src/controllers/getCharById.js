const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  let { id } = req.params;

  axios
    .get(URL + id)
    .then(({ data }) => {
      const { name, gender, species, origin, image, status } = data;

      let character = {
        id: id,
        status,
        name,
        species,
        origin: origin.name,
        image,
        gender,
      };
      return character.name
        ? res.json(character)
        : res.satus(404).send("character not fount");
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
}

module.exports = getCharById;
