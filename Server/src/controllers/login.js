const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;

  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      access = true;
    }else{
      access=false
      console.log(error.message)
    }
  });
  return res.status(200).json({ access });
}

module.exports =  login ;
