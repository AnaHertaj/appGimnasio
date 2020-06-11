
/**
 *  FICHERO DE PRUEBAS SOBRE MONGOBD
 */

const router = require('express').Router();

//me traigo el modelo person.js de la bbdd
//primera en mayuscula porque se parece a una clase, 
const Person = require('../models/person')

//http://localhost:3000/test // cada vez que entro se suma uno nuevo en robot
router.get('/', (req,res) => {
    let pers = new Person();
    pers.name = "John";
    pers.surname = "O'Neill";
    pers.email = "jo@gmail.com";
    pers.telephone = "99922900";
    pers.address = "UK";
    pers.active = true;
    pers.save(); // AÑADO DATOS
    res.send("Entoy en /test"); 
 });


 // insert el método create y gestión de promesa conm THEN
 router.get('/insert_v2',(req,res)=>{
    Person.create({ 
            name: 'Luis',
            surname: 'López',
            email: 'jo@gmail.com',
            telephone: '987987654',
            address: 'Madrid',
            active: false
        }).then((person)=>{
            res.json(person);
     });
 });

  // insert el método create y gestión de promesa con ASYNC AWAIT // await permite quitar el then, pero hayq ue emter persona como un varaible
 router.get('/insert_v3', async (req,res)=>{
         const per = await Person.create({ 
            name: 'Angel',
            surname: 'Stevenson',
            email: 'jasss@gmail.com',
            telephone: '876456342',
            address: 'Sweden',
            active: false
        });
        res.json(per);
 });
 
 // todas son asincronas create y save,
 // con el away le paras el asincrono un momento pero da igual
 // cualquiera  de las tres es válida

 // get all CON PROMESAS
 // http://localhost:3000/test/getAll
 router.get('/getAll', (req,res) => {
     // quiero recuperar todas las personas de mi bbdd
     Person.find() // devuelveme todo lo que tengas del modelo con el que estoy trabajando // array de objetos de tipo personas
     .then((itemsPeople)=> {
        res.json(itemsPeople); // con función anónima 
     });
 });

 // get all CON ASYNC // // // ELEGIDA 
 router.get('/getAll2', async (req, res) => {
    // Recuperar todos los documentos de la colección people
    // Gestión de la promesa con ASYNC AWAIT
    const itemsPeople = await Person.find();
    res.json(itemsPeople);
 });

//filtro por nombre
 router.get('/getByName', async (req, res) => {
    const itemsPeople = await Person.find({ name: 'Luis' });
    res.json(itemsPeople); //para ver que me lo devuelve
 });

//filtro con actives
router.get('/getByActive', async (req, res) => {
    // const itemsPeople = await Person.find({ edad: 18 });
    // const itemsPeople = await Person.find({ edad: > 18 }); //ASI NO FUNCIONA AQUI
    // const itemsPeople = await Person.find({ edad: { $gt: 18 } }); queremos mayor de 18; le meto otro objeto con clave y valor y meter leguaje mongoose // gt = greater than
    // otro ejemplo { edad: $gt 18, $lt: 65 }
    const itemsPeople = await Person.find({active : true});
    res.json(itemsPeople); //para ver que me lo devuelve
 });

 // con $or: o este filtro o este filtro
//...  .find({
    //     $or:[
    //         { edad: { $lt: 18 } },
    //         { edad: { $gt: 65 } } si quiero incluir 65 { edad: { $gte: 65 } }
    //     ]
//  });

 //filtro por nombre y no active
 router.get('/getByDosFiltros', (req, res) => {
     Person.find({ 
         name: 'Luis',
         active : false
        })
        .then((itemsPeople)=> {
            res.json(itemsPeople); // con función anónima 
         });
 });

 module.exports = router; 


 /*
function cerarParrafo(pColor, pTexto, pTamano, pVisible){}
crearParrafo('red','lalala', 100, true); //// esto no es semántico y genera dudas

function cerarParrafo(color, texto, tamano, visible){}
crearParrafo({
    color: 'red',
    texto: 'lalall',
    tamano: '200',
    visible: false  /// aqui incluso se pueden cambiar de orden y todo
})
 */