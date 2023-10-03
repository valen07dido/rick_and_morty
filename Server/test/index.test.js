const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = (await agent.get("/rickandmorty/character/1")).body;
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("name");
      expect(response).toHaveProperty("species");
      expect(response).toHaveProperty("gender");
      expect(response).toHaveProperty("status");
      expect(response).toHaveProperty("origin");
      expect(response).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/999999999").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    //     it("el login es correcto", async () => {
    //       const response = (await agent.get(
    //         `/rickandmorty/login?email=valentin@mail.com&password=131213`
    //       )).body;
    //       expect(response.access).toEqual(true);
    //     });
    //     it("el login es incorrecto", async () => {
    //       const response = (await agent.get(
    //         `/rickandmorty/login?email=valentin&password=121314`
    //       )).body;
    //       expect(response.access).toEqual(false);
    it("login ok", async () => {
        const response = (
            await agent.get(
                "/rickandmorty/login?email=valentin@mail.com&password=131213"
                )
                ).body
                console.log(response);
                expect(response.access).toEqual(true);
            });
            it("login no ok", async () => {
                const response = (
                    await agent.get(
                        "/rickandmorty/login?email=aasdas@mail.com&password=asdasda"
                        )
                        ).body
                        console.log(response);
                        expect(response.access).toEqual(false);
                    });

                    
        });
            
  describe("POST /rickandmorty/fav", () => {
    const personaje1 = { id: "1", name: "jorge" };
    const personaje2 = { id: "2", name: "dario" };

    it("devuelve dos personaje en el segundo llamado", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(personaje1))
        .body;
      expect(response).toContainEqual(personaje1);
    });
    it("devuelve un personaje en el primer llamado", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(personaje2))
        .body;
      expect(response).toContainEqual(personaje1);
      expect(response).toContainEqual(personaje2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    const personaje1 = { id: "1", name: "jorge" };
    const personaje2 = { id: "2", name: "dario" };
    it("no elimina ningun personaje", async () => {
      const response = (await agent.delete("/rickandmorty/fav/23")).body;
      expect(response).toContainEqual(personaje1);
      expect(response).toContainEqual(personaje2);
    });
    it("elimina el personaje con id 1", async () => {
      const response = (await agent.delete("/rickandmorty/fav/1")).body;
      expect(response).not.toContainEqual(personaje1);
      expect(response).toContainEqual(personaje2);
    });
  });
});
