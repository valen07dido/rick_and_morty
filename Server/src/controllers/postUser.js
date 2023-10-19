const User=require('../DB_connection')
async function postUser(req,res){
const {email,password}=req.body
if (!email || !password || email.trim() === '' || password.trim() === '') {
    return res.status(400).send('Faltan datos');
  }

  try {
    // Create a new user
    const newUser = await User.create({ email, password });

    // Send the newly created user as a response
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear el usuario');
  }
};

module.export=postUser