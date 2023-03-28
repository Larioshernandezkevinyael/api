const mongoose = require('mongoose');
const productosSchema = mongoose.Schema({
    nombre: {
        type: 'string',
        required: true,
        unique: true
    },
    precio: {
        type: Number,
        required: true
    },

    disponibilidad: {
        type: Number,
        required: true
    },
    idcategoria: {
        type: mongoose.Schema.Types.ObjectId, ref: 'categoria_productos'

    },
    idpresentacion: {
        type: mongoose.Schema.Types.ObjectId, ref: 'presentacion'

    },
    foto: {
        type: 'string'
    }


});
module.exports = mongoose.model('productos', productosSchema);