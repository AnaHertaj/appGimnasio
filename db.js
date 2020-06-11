const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/gimnasios' //url local, si no ip remota, otra bbdd etc
// base de datos para este proyecto en concreto
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //Deprecated que nos indicó la libreria que debiamos ponerlas
    useFindAndModify: false
});