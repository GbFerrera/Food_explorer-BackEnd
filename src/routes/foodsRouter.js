const {Router} = require("express")
const foodsRouter = Router()

const FoodsController = require("../controllers/foodsControllers")

const foodsControllers = new FoodsController


foodsRouter.post("/:user_id", foodsControllers.create)
foodsRouter.get("/:id", foodsControllers.show)
foodsRouter.delete("/:id", foodsControllers.delete)


module.exports = foodsRouter