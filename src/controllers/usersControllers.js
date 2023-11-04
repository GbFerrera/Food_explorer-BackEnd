const AppError = require("../utils/AppError");
const sqliteConnetion = require("../database/sqlite")

 class UsersController {

  async create(request, response) {
    
    const { name, email, password } = request.body;

    const database = await sqliteConnetion()

    

    await database.run(`
    INSERT INTO users (name,email,password) VALUES(?,?,?)`,[name,email,password])



    return response.json("Criado com sucesso")




  }
  
}

module.exports = UsersController;
