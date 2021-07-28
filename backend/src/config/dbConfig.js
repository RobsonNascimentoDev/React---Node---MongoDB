//Import p/ Usar o Mongo
const mongoose = require('mongoose');
//String de Conexão
const dbConfig = 'mongodb+srv://administrador:MongoCurso@cluster0.oyzag.mongodb.net/annotations?retryWrites=true&w=majority';
//Conexão
const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Exporta a Conexão
module.exports = connection;
