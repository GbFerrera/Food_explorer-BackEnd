const {Router} = require("express")
const foodsRouter = Router()

const FoodsController = require("../controllers/foodsControllers")

const foodsControllers = new FoodsController


foodsRouter.post("/", foodsControllers.create)



module.exports = foodsRouter