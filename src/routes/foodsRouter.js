const {Router} = require("express")
const foodsRoutes = Router()

const FoodsController = require("../controllers/foodsControllers")

const foodsControllers = new FoodsController


foodsRoutes.post("/:user_id", foodsControllers.create)
foodsRoutes.get("/:id", foodsControllers.show)



module.exports = foodsRoutes