const {Router} = require("express")
const favoritesRouter = Router()

const FavoritesController = require("../controllers/favoritesControllers")

const favoritesController = new FavoritesController



favoritesRouter.post("/:user_id/:food_id", favoritesController.create)





module.exports = favoritesRouter