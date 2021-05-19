const filmes = require("../models/filmes.json")

const getAll = (request, response)=>{
    response.status(200).send(filmes)
}

const getById = (request, response)=>{
    const idRequerido = request.params.idRequerido
    let idFiltrado = filmes.find(filme => filme.id == idRequerido)

    if(idFiltrado = underfind || idRequerido == ""){
        response.status(404).json([{
            "mensagem": "id não existente"
        }])
    }else{
        response.status(200).json(idFiltrado)
        
    }
    
}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const filmeFiltrado = filmes.find(filme.Title.toLowerCase().includes(titulo))

    console.log(titulo)
    console.log(filmeFiltrado)

    if(titulo == "" || filmeFiltrado == underfind){
        response.status(400).json([{
            "mensagem":" por favor , digite um título válido"
        }])

    }else{
        response.status(200).send(filmeFiltrado)
    }
 }

module.exports = {
    getAll,
    getById,
    getByTitle
}