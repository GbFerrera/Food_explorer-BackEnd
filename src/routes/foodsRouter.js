const {Router} = require("express")
const foodsRoutes = Router()

const FoodsController = require("../controllers/foodsControllers")

const foodsControllers = new FoodsController


foodsRoutes.post("/:user_id", foodsControllers.create)



module.exports = foodsRoutes