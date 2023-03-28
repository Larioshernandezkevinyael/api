const mongoose = require('mongoose');
const pagosSchema = mongoose.Schema({
    tipo_de_pago: {
        type: String,
        require: true,
    }

});

module.exports = mongoose.model('pagos', pagosSchema);