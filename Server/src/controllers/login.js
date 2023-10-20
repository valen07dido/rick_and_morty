// const users = require("../utils/users");

// function login(req, res) {
//   const { email, password } = req.query;

//   users.forEach((user) => {
//     if (user.email === email && user.password === password) {
//       access = true;
//     }else{
//       access=false

//     }
//   });
//   return res.status(200).json({ access });
// }

// module.exports =  login ;

const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (email && password) {
      const foundUser = await User.findOne({
        where: { email },
      });
      if (!foundUser) return res.status(404).json({ message: "usuario no encontrado" });
      if (foundUser.password !== password) return res.status(403).json({ message: "Contraseña incorrecta" });
      return res.status(200).json({access: true})
    }
  } catch (error) {
  return res.status(500).json({error:error.message})  

  }
};

module.exports=login
