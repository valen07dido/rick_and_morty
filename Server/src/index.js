const http = require('http');
const data = require('./utils/data');

http.createServer((req, res) => {
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (url.includes("/rickandmorty/character")) {
        let id = url.split("/").pop();
        id = Number(id);
        let character = data.find(character => character.id === id);

        res.writeHead(200, { "Content-Type": "application/json" });
        if (character) {
            res.end(JSON.stringify(character));
        } else {
            res.end(JSON.stringify({ error: "Personaje no encontrado" }));
        }
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(3001, 'localhost');   