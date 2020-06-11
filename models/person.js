
const mongoose = require('mongoose');
const Schema = mongoose.Schema; //creo esquema

//CREO MODELO DE MONGOOSE DENTRO DE MI APP EXPRESS

//propiedades de persona con este esquema en concreto
const personSchema =  new Schema({
   name: String,
   surname: String,
   email: String,
   telephone: Number,
   address: String,
   active: Boolean
});

module.exports = mongoose.model('person', personSchema); //en singular porque mongoose luego añade la "s"; si lo llamamos personas se llamará personas en robo3t
