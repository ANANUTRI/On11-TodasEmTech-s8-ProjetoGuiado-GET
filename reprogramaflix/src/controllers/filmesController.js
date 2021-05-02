const filmes = require("../models/filmes.json")

const getAll = (request, response)=>{
    response.status(200).send(filmes)
}

const getById = (request, response)=>{
    const idRequerido = request.params.idRequerido
    response.status(200).json(filmes.find(filme => filme.id == idRequerido))
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find(filme.Title.toLowerCase().includes(titulo))

    console.log(titulo)
    console.log(filmeFiltrado)


    response.status(200).send(filmeFiltrado)
}

module.exports = {
    getAll,
    getById,
    getByTitle
}