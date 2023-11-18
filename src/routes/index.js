const {Router} = require("express")
const routes = Router()

const usersRouter = require("./usersRouter")
const foodsRoutes = require("./foodsRouter")

routes.use("/users", usersRouter)
routes.use("/foods" , foodsRoutes)








module.exports = routes