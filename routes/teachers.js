
const router = require('express').Router();
const Teacher = require('../models/teacher');


// peticiones GET \\

//http://localhost:3000/teachers
// router.get('/', (req,res) => {
//    res.send("Entro a /teachers"); //testeo antes de empezar
   router.get('/', async (req,res) => {
    const teachers = await Teacher.find();
    // console.log(teachers); // para ver que funciona, verlo en la consola
    res.render('teachers/index', { teachers })
 });


// GET http://localhost:3000/teachers/new
router.get('/new', (req,res) => {
   // res.send("Entro a /teachers/new"); //testeo antes de empezar
   res.render('teachers/form')
 });
// más abajo el post /create que le corresponde


 // http://localhost:3000/teachers/edit/IDCLIENT // voy a usar la async
 router.get('/edit/:teacherId', async (req,res) => {
    // res.send("Entro a la ruta de EDIT"); // compruebo que funciona 
    const teacherId = req.params.teacherId;
    Teacher.findById(teacherId)
    // en vez de gestion de promesa con con await lo hago con then
        .then((teacher)=>{
           // res.json(teacher);
           res.render('teachers/formEdit', { teacher } ); 
           // vista y modelo { client: client }  = { variable : modelo } si se llaman igual solo ponemos el modelo y ya  
        })
        .catch((err) => {
            res.send('Error al recuperar al instructor');
        });
});
// más abajo el post /update que le corresponde


 // http://localhost:3000/teachers/remove/IDCLIENT // voy a usar la async
 router.get('/remove/:teacherId', (req, res) => {
    // res.send("Entro en la ruta /teachers/remove/IDCLIENTE"); // compruebo que funciona 
    const teacherId = req.params.teacherId;
    Teacher.findByIdAndRemove(teacherId)
        .then( client => {
            res.redirect('/teachers');
        })
        .catch((err) => {
            res.send("<div style='color:red'>" + 'Error al borrar el instructor ' + "</div>" + err.message);
        })

 });

  //http://localhost:3000/cualquierotracosa // para el detalle del instructor
// router.get('/:teacherID', (req,res) => {
//   res.send("FUNCIONA con /cualquierotracosa"); // compruebo que funciona 
router.get('/:teacherId', async (req, res) => { 
   try{
       const teacherId = req.params.teacherId; 
       const teacher = await Teacher.findById(teacherId); // encuentro el ID u lo meto en esa variable
       // res.send(teacherId); 
       res.render('teachers/detail', { teacher } ); 
      // res.json(client); // antes demostrarlo en una vista
   
       // CUIDADO SOLO UNA RESPUESTA POR MANEJADOR 
   } catch (error) { // err o error se entendería 
       res.send("Error al recuperar el instructor" + "<br>" + "<em>" + error.message + "</em>");
   }

}); 



// peticiones POST \\
router.post('/create', async (req,res) => {
    await Teacher.create(req.body);
    res.redirect('/teachers'); 
});

// POST sobre http://localhost:3000/teachers/update
router.post('/update', async (req, res) => { // req, res IMPORTANTE ORDEN
    try{
        await Teacher.findByIdAndUpdate(req.body.id, req.body); 
        //con el asyn await no me hace falta el then y el catch // el req.body.id  me viene del hidden que preparé
        res.redirect('/teachers');
    } catch(err){
        res.send('Error en la actualización del instructor');
    }

});


module.exports = router;

