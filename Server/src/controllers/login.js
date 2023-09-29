const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;

  //   const user = users.find(
  //     (usuario) => users.email === email && users.password === password
  //   );
  //   if (user.legth > 0) {
  //     res.status(200).json({ access: true });
  //   } else {
  //     res.status(500).json({ access: false });
  //   }
  users.forEach((user) => {
    if (user.email === email && user.password === password) {
      access = true;
    }
  });
  return res.status(200).json({ access });
}

module.exports =  login ;
