const controller = require("../controllers/filmesController") // chamando o controller

const express = require("express") //chamando o express
const router = express.Router() //executando o router

router.get("/todos", controller.getAll) //configurando a rota secundária, continuação da rota e dizendo que ela vai usar a função getAll que está no controller
router.get("/title", controller.getByTitle)
router.get("/:idRequerido", controller.getById)

module.exports = router // exportando o router