const {Router} = require("express")
const usersRouter = Router()

const UsersController = require("../controllers/usersControllers")
const userscontroller = new UsersController

usersRouter.post("/",userscontroller.create)
usersRouter.put('/:id',userscontroller.update)









module.exports = usersRouter
