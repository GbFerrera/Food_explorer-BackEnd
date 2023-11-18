const {Router} = require("express")
const routes = Router()

const usersRouter = require("./usersRouter")
const foodsRouter = require("./foodsRouter")

routes.use("/users", usersRouter)
routes.use("/foods" , foodsRouter)








module.exports = routes