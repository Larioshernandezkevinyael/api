const mongoose = require('mongoose');
const respuestasSchema = mongoose.Schema({
    respuestas:{
        type: 'string',
        required: true

    },
    idpregunta:{
        type: mongoose.Schema.Types.ObjectId, ref:'preguntas'

    },
    idusuario:{
        type: mongoose.Schema.Types.ObjectId, ref:'usuario'

    }

});

module.exports = mongoose.model('respuestas', respuestasSchema);