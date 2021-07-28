const express = require('express');
//Criando as Rotas
const routes = express.Router()
//Importa o Controller
const AnnotationController = require('./Controller/AnnotationController');
const ContentController = require('./Controller/ContentController');
const PriorityController = require('./Controller/PriorityController');

//Rotas Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

//Rotas Priority
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);


//Rotas Content
routes.post('/content/:id', ContentController.update);

module.exports = routes;