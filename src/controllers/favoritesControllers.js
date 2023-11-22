const sqliteConnection = require("../database/sqlite")


class FavoritesController{

async create(request,response) {

const {user_id, food_id} = request.params

const database = await sqliteConnection()

const user = await database.get("SELECT * FROM users WHERE id = (?)",
[user_id])

const food = await database.get("SELECT * FROM foods WHERE id = (?)",[food_id])



await database.run(
  `
INSERT INTO favorites (User_id, Food_id) VALUES(?,?)`,
  [user_id,food_id]
);


   return response.json("Item Favoritado com sucesso")


}




}



module.exports = FavoritesController