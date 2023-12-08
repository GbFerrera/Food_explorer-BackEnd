const {Router} = require("express")
const routes = Router()

const usersRouter = require("./usersRouter")
const foodsRouter = require("./foodsRouter")
const favoritesRouter = require("./favoritesRouter")
const sessionsRoutes = require("./sessionsRouter")



routes.use("/sessions", sessionsRoutes)
routes.use("/users", usersRouter)
routes.use("/foods" , foodsRouter)
routes.use("/favorites" , favoritesRouter)








module.exports = routes