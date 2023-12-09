const {Router} = require("express")
const usersRouter = Router()

const UsersController = require("../controllers/usersControllers")
const userscontroller = new UsersController

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

usersRouter.post("/",userscontroller.create)
usersRouter.put('/', ensureAuthenticated , userscontroller.update)









module.exports = usersRouter
