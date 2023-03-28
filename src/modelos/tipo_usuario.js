const mongoose = require('mongoose');
const tipousuarioSchema = mongoose.Schema({
    tipousuario:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('tipousuario', tipousuarioSchema);