const { request, response } = require('express');
const Annotations = require('../Model/AnnotationsData');

module.exports = {

    //Função get()
    async read(request, response) {
        const priority = request.query;
        const annotationsList = await Annotations.find(priority);
        return response.json(annotationsList);

    },

    //Post Altera Prioridade
    async update(request, response) {
        const { id } = request.params;

        const updatePriority = await Annotations.findOne({ _id: id });

        if (updatePriority) {
            updatePriority.priority = !updatePriority.priority;
            await updatePriority.save();
            return response.json({
                sucess: "Registro Alterado!"
            })
        } else {
            return response.status(400).json({
                error: "Registro não encontrado!"
            })
        }
    }
}