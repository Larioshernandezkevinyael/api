const mongoose = require('mongoose');
const usuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        unique : true
    },
    password:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },   
    imagen:{
        type: String,
        required: true
    },
    tipo_de_user:{
        type: mongoose.Schema.Types.ObjectId, ref: 'tipousuario',
        required: true
    },
    idpregunta:{
        type: mongoose.Schema.Types.ObjectId, ref: 'preguntas',
        required: true
    }
});


module.exports = mongoose.model('usuario', usuarioSchema);

 