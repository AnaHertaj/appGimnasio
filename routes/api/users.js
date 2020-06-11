// var express = require('express');
// var router = express.Router();
const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../../models/user'); // 3. esto lo meto cuando quiera ya tratar la bbdd

// POST http://localhost:3000/api/users/register
router.post('/register', (req, res) => {

   req.body.password = bcrypt.hashSync(req.body.password, 15);
   //el número para seguridad al meterselo esas veces
   //lo quiero sincrono
   //encriptar la password y luego creo el usuario

   //res.send("Estoy en el registro!") // 1. testeo primero
   // res.json(req.body); // 2. renderizo en body en el rest
   User.create(req.body) // 4. muestro datos de bbdd
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json({ 
        error : "ha ocurrido un error en el registro",
        message: err.message
       });
    });
});

module.exports = router;
