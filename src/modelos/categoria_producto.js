const mongoose = require('mongoose');
const categoriaSchema = mongoose.Schema({
    categoria: {
        type: String,
        require: true,
    }

});

module.exports = mongoose.model('categoria', categoriaSchema);