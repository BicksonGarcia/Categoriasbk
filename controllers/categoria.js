const { response, request } = require('express');
const bcrypt = require('bcryptjs');
//Importación del modelo
const Categoria = require('../models/categoria');


const getCategorias = async (req = request, res = response) => {

    const listaCategorias = await Promise.all([
        Categoria.countDocuments(),
        Categoria.find()
    ])

    res.json({
        msg: 'GET API DE CATEGORIAS',
        listaCategorias
    })

}

const postCategoria = async (req = request, res = response) => {

    //Desestructuración
    const { nombre, descripcion } = req.body;
    const categoriaGuardadoDB = new Categoria({ nombre, descripcion });

    
    //Guardar en BD
    await categoriaGuardadoDB.save();

    res.json({
        msg: 'Post Api - Post Categoria',
        categoriaGuardadoDB
    });

}


const putCategoria = async (req = request, res = response) => {

    const { id } = req.params;
    const { _id, img, ...resto } = req.body;

    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto)

}

const deleteCategoria = async(req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;

    //Eliminar fisicamente de la DB
    const categoriaEliminado = await Categoria.findByIdAndDelete( id);

    //Eliminar cambiando el estado a false
    //const usuarioEliminado = await Usuario.findByIdAndUpdate(id, { estado: false });

    res.json({
        msg: 'DELETE eliminar user',
        categoriaEliminado
    });
}

module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}


// CONTROLADOR