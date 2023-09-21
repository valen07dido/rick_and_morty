const http = require("http");
const data = require("./utils/data");
const getCharById= require('./controllers/getCharById')

http
  .createServer((req, res) => {
    const { url } = req;
    res.setHeader("Access-Control-Allow-Origin", "*");
    // if (url.includes("/rickandmorty/character")) {
    //   let id = url.split("/").pop();
    //   id = Number(id);
    //   let character = data.find((character) => character.id === id);

    //   res.writeHead(200, { "Content-Type": "application/json" });
    //   if (character) {
    //     return res.end(JSON.stringify(character));
    //   } else {
    //     return res.end(JSON.stringify({ error: "Personaje no encontrado" }));
    //   }
    // }
    if (url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
       getCharById(res, id);
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(3001, "localhost");
