const router = require("express").Router();
// Controllers
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const deleteFav = require("../controllers/deleteFav");
const getFav = require("../controllers/getFavs");
// const {postFav}=require('../controllers/handleFavorites')
const postFav = require("../controllers/postFav");

//rutas
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.get("/fav",getFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
