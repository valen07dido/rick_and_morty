const server=require('./app')
const {conn}=require('./DB_connection')

const PORT = 3001;


conn.sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running into ${PORT} Port`);
    });
  })
  .catch((error) => {
    console.error('No se pudo iniciar el servidor:', error);
  });