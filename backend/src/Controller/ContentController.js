const { request, response } = require('express');
const Annotations = require('../Model/AnnotationsData');

module.exports = {

   //Post Altera Prioridade
   async update(request, response) {
    //O que a gente passa na rota da requisição
    const { id } = request.params;
    //O que passa no JSON da requisição
    const { note } = request.body;

    const updatePriority = await Annotations.findOne({ _id: id });

    if (updatePriority) {
        updatePriority.note = note;
        await updatePriority.save();
        return response.json({
            arquivoAlterado: updatePriority,
            sucess: "Registro Alterado!"
        })
    } else {
        return response.status(400).json({
            error: "Registro não encontrado!"
        })
    }
}
}