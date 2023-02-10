const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    img: {
        type: String
    },

});


module.exports = model('Categoria', CategoriaSchema);