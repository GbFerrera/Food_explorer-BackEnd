const {Router} = require("express")
const foodsRouter = Router()

const FoodsController = require("../controllers/foodsControllers")

const foodsControllers = new FoodsController


foodsRouter.post("/:user_id", foodsControllers.create)
foodsRouter.get("/:id", foodsControllers.show)
foodsRouter.delete("/:id", foodsControllers.delete)
foodsRouter.put("/:user_id/:food_id", foodsControllers.update)


module.exports = foodsRouter