
const mongoose = require('mongoose'); // importo la libreria que necesitamos
const Schema = mongoose.Schema; // creo esquema, la clase esquema


//CREO MODELO , colección de base de datos\\ 
// DE MONGOOSE DENTRO DE MI APP EXPRESS
// clase con claves y tipo


// genero una instancia de la clase schema
// propiedades de instancia de clase esquema llamada client con este esquema en concreto
const clientSchema =  new Schema({
   name: String,
   surname: String,
   email: String,
   telephone: Number,
   address: String,
   active: Boolean 
});

// esto genera la consola que es igual lo que me viene del form al ql esquema que tengo acá
/*
[Object: null prototype] {
    name: 'Ana',
    surname: 'hernando',
    email: 'asasamd@gmail.com',
    telephone: '545455',
    address: 'madrid',
    active: 'on'
  }
*/

module.exports = mongoose.model('client', clientSchema); //en singular porque mongoose luego añade la "s"; si lo llamamos client se llamará clientes en robo3t
