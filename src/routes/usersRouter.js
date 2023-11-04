const {Router} = require("express")
const usersRouter = Router()

const UsersController = require("../controllers/usersControllers")
const userscontroller = new UsersController

usersRouter.post("/",userscontroller.create)










module.exports = usersRouter
