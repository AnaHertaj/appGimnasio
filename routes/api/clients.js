

// ** estos dentro de api solo devolverán JSONs ** \\
// en este fichero todas las peticiones viene y van a la mism a "ruta" api/clients/

const router = require('express').Router();

const Client = require('../../models/client');

// GET http://localhost:3000/api/clients //// ya viene de api.js
// complejo para usar en el navigador asi que probamos en con el plugin REST
// AQUI NO HACE FALTA EL ASYNC AWAIT USAREMOS EN THEN CATCH
router.get('/',  (req, res) => {
    Client.find()
        // .then( clientes => {
        //     res.json(clientes);
        // })
        // .catch(err => {
        //     res.json({ error: err.mensaje });
        // })
        .then(clients => res.json(clients))
        .catch(err => res.json({ error: err.message }));
        // porque sólo tengo una sentencia podemos ponerlo así
});

// POST http://localhost:3000/api/clients 
router.post('/', async (req, res) => {
    try{
        const newClient = await Client.create(req.body); // se pueden hacer comprobaciones
        res.json(newClient); // no puede ser otra respuesta que no sea un JSON
    } catch(err){
        res.json({ error: err.message });
    }

});

//PUT http://localhost:3000/api/clients
router.put('/', async(req, res) => { // se usa "put" para editar...
    const editedClient = await Client.findByIdAndUpdate(req.body.id, req.body, { new: true }); //pasamo sel id y aparte todos los cmabos que modfique (en el body) como poen aseca id en el rest ponemos id
    res.json(editedClient);

});

//DELETE http://localhost:3000/api/clients/IDCLIENTE
router.delete('/:clientId', (req, res) => { 
    const clientId = req.params.clientId;
    Client.findByIdAndDelete(clientId)
    .then(client => {
       // res.json({ success: 'El cliente se ha borrado' });
       if (client){
           res.json({ success: 'El cliente se ha borrado' });
       } else {
        res.json({ error: 'El cliente no existe' });
       }
    })
    .catch(err => {
        res.json({ error: err.message });
    })
});

module.exports = router;

