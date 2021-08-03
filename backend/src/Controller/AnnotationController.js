const { request, response } = require('express');
const Annotations = require('../Model/AnnotationsData');

module.exports = {

    //Função get()
    async read(request, response){
        const annotationsList = await Annotations.find();
        return response.json(annotationsList);
    },

    //Função post()
    async create(request, response){
        const { title, note, priority} = request.body;
        
        if(!title){
            return response.status(400).json({
                error:"O doc precisa de um title!",
            })
        }

        if(!note){
            console.log('entrou no note undefined')
            return response.status(400).json({
                error:"O doc precisa de notas!",
            })
        }

        const annotationsPost = await Annotations.create({
            title, note, priority
        });
        
        return response.json(annotationsPost);
    },

    //Função de Delete
    async delete(request, response){
        const {id} = request.params;
        
        const annotationsDelete = await Annotations.findOneAndDelete({
            _id: id
        });
        if(annotationsDelete){
            return response.json(annotationsDelete);
        }
        return response.status(400).json({
            error:"Registro não encontrado!"
        })
    }
}
