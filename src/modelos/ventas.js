const mongoose = require('mongoose');
const ventasSchema = mongoose.Schema({
    idproducto:{
        type: mongoose.Schema.Types.ObjectId, ref:'producto',

    },
    cantidad:{
        type: Number,
        required: true

    },
    total_a_pagar:{
        type: Number,
        required: true
    },
    idpagos:{
        type: mongoose.Schema.Types.ObjectId, ref:'pagos'

    },
    idusuario:{
        type: mongoose.Schema.Types.ObjectId, ref:'usuario'
    }

});

module.exports = mongoose.model('ventas', ventasSchema);