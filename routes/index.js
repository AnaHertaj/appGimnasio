var express = require('express');
var router = express.Router();

// http://localhost:3000/
router.get('/', (req, res) => {
  //res.send("Entra en / (HOME)"); // probar si funciona
  
  // const arrClients = [
  //   { nombre: 'John', apellido: "Carpenter", numCliente: 'AJS32' },
  //   { nombre: 'Mery', apellido: "Johnson", numCliente: 'MLE34' },
  //   { nombre: 'Peter', apellido: "Murphy", numCliente: 'ASF66' },
  // ]
  
  res.render('index'); // sin llevarme variable
  // res.render('index', {
  //   arrClients
  // }); 

});


//* GET contact page. */
// http://localhost:3000/contact
//   router.get('/contact', (req, res) => {
//     // // res.send("Entra en CONTACT");
//     res.render('contact', {
//       numeros: [1,4,12,56,33,89]
//     });   
//  });

module.exports = router;
