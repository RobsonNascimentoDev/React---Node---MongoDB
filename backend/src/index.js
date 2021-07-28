//Import p/ Usar o Express
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

//Importa a Conexão c/ BD
const app = express();
require('./config/dbConfig');

app.use(cors())
app.use(express.json());
app.use(routes);

//Local onde é executado o servidor
app.listen(3333)