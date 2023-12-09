const {Router} = require("express")
const foodsRouter = Router()

const FoodsController = require("../controllers/foodsControllers")
const foodsControllers = new FoodsController

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

foodsRouter.use(ensureAuthenticated)

foodsRouter.post("/", foodsControllers.create)
foodsRouter.get("/:id", foodsControllers.show)
foodsRouter.delete("/:id", foodsControllers.delete)
foodsRouter.put("/:food_id", foodsControllers.update)


module.exports = foodsRouter