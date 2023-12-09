const {Router} = require("express")
const foodsRouter = Router()

const FoodsController = require("../controllers/foodsControllers")
const foodsControllers = new FoodsController

const FoodAvatarController = require("../controllers/foodAvatarController")
const foodAvatarController = new FoodAvatarController()

const multer = require("multer")
const uploadConfig = require("../configs/upload")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const upload = multer(uploadConfig.MULTER)

foodsRouter.use(ensureAuthenticated)

foodsRouter.post("/", foodsControllers.create)
foodsRouter.get("/:id", foodsControllers.show)
foodsRouter.delete("/:id", foodsControllers.delete)
foodsRouter.put("/:food_id", foodsControllers.update)
foodsRouter.patch("/avatar/:food_id" , upload.single("avatar"), foodAvatarController.update)
module.exports = foodsRouter