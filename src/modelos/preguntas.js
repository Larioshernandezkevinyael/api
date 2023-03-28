const mongoose = require('mongoose');
const preguntasSchema = mongoose.Schema({
    pregunta: {
        type: String,
        require: true,
    }

});

module.exports = mongoose.model('preguntas', preguntasSchema);