// const router = require('express').Router();
// ESTOS DOS SON LOS FIJOS
// module.exports = router;


const router = require('express').Router();

const Client = require('../models/client.js');

// peticiones GET \\

//http://localhost:3000/clients
////////router.get('/', (req,res) => {
   // res.send("Entro a /clients"); //testeo antes de empezar
   router.get('/', async (req,res) => {
   const clients = await Client.find();
   console.log(clients); // para ver que funciona, verlo en la consola
//    router.get('/getAll2', async (req, res) => {
//     const itemsPeople = await Person.find();
//     res.json(itemsPeople);
//  });
//////// res.render('clients/index')
    res.render('clients/index', { clients }) //paso los datos a la vista, se supone que la vista http://localhost:3000/clients ya recibe los datos visualmente , hayq ue preparar la vista views/clients/index.pug
});

// NO HACE FALTA BARRITA EN EL RENDER

//http://localhost:3000/clients/new
// muestra un formulario para insertar clientes
router.get('/new', (req,res) => {
    // res.send("Entro a /clients"); //testeo antes de empezar
    res.render('clients/form')
 });

 // http://localhost:3000/clients/edit/IDCLIENT // voy a usar la async
router.get('/edit/:clientId', async (req,res) => {
    // res.send("Entro a la ruta de EDIT"); // compruebo que funciona 
    const clientId = req.params.clientId;
    Client.findById(clientId)
    // en vez de gestion de promesa con con await lo hago con then
        .then((client)=>{
           // res.json(client);
           res.render('clients/formEdit', { client } ); // vista y modelo { client: client }  = { variable : modelo } si se llaman igual solo ponemos el modelo y ya  
        })
        .catch((err) => {
            res.send('Error al recuperar al cliente');
        });
});


 // http://localhost:3000/clients/remove/IDCLIENT // voy a usar la async
 // :clientId usamos en todos el mismo pero donde tiene que wstar igual es en la propia función
 router.get('/remove/:clientId', (req, res) => {
    // res.send("Entro en la ruta /clientes/remove/IDCLIENTE"); // testear > OK FUNCIONA
    const clientId = req.params.clientId;
    Client.findByIdAndRemove(clientId)
        .then( client => {
            res.redirect('/clients');
        })
        .catch((err) => {
            res.send("<div style='color:red'>" + 'Error al borrar el cliente ' + "</div>" + err.message);
        })

 });


 //http://localhost:3000/cualquierotracosa
 router.get('/:clientId', async (req, res) => { 
     // ver bien patrón paar que no cargue /new lo metemos abajo de new
    /// res.send("FUNCIONA con /cualquierotracosa");
    //PILLAR ERROR CON TRY y CATCH
    try{
        const clientId = req.params.clientId; // con el tag que hayamos usado //aqui cojo la parte variable

        const client = await Client.findById(clientId); // encuentro el ID y lo meto en esa variable
    
        // res.send(clientId); 
        res.render('clients/detail', { client } ); 
       // res.json(client); // antes demostrarlo en una vista
    
        // CUIDADO SOLO UNA RESPUESTA POR MANEJADOR 
    } catch (error) { // err o error se entendería 
        res.send("Error al recuperar el cliente" + "<br>" + "<em>" + error.message + "</em>");
    }

}); 
 

// peticiones ******* POST POST POST  ******** \\
// hago una petición post gracias al formulario en new
// http://localhost:3000/clients/create   // 
// podria ser /clients pero mejor no es obligatoria crear una zona para ver si te está llegando


// form(action="/clients/create", method="POST")
// gestiona los datos enviados desde el formulario anterior
router.post('/create', async (req,res) => {
    // ¿me está llegando el formulario?
    // modifico el valor de active que no sea on or off y que sea true or false
    req.body.active = (req.body.active === 'on') ? true : false; 
       // // // NO HACE FALTA en el booleano por default ya no haría falta ternario req.body.active = (req.body.active === 'on'); 
      // // // condicionador comparador ternario

    await Client.create(req.body);
      //no voy a usar variable porque no lo voy a usar como una variable
      // le paso el objeto que he querido insertar 
      // formulario está coordinado con el objeto de la instancia del modelo

// console.log(req.body);
    //res.send('Entar en POST /clients/create')
    res.redirect('/clients'); 
});

// POST sobre http://localhost:3000/clientes/update
// Gestiona los datos recibidos desde el formulario de actualización 
// router.post('/update', (req, res) => { // req, res IMPORTANTE ORDEN
//      res.json(req.body);
// });
router.post('/update', async (req, res) => { // req, res IMPORTANTE ORDEN
    try{
        await Client.findByIdAndUpdate(req.body.id, req.body); //con el asyn await no me hace falta el then y el catch // el req.body.id  me viene del hidden que preparé
        res.redirect('/clients');
    } catch(err){
        res.send('Error en la actualización del clienet');
    }

});


module.exports = router; 
