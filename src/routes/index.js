const {Router} = require("express")
const routes = Router()

const usersRouter = require("./usersRouter")


routes.use("/users", usersRouter)









module.exports = routes