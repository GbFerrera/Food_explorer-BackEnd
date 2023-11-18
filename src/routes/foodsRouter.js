const {Router} = require("express")
const foodsRoutes = Router()

const FoodsController = require("../controllers/foodsControllers")

const foodsControllers = new FoodsController


foodsRoutes.post("/:user_id", foodsControllers.create)
foodsRoutes.get("/:id", foodsControllers.show)
foodsRoutes.delete("/:id", foodsControllers.delete)


module.exports = foodsRoutes