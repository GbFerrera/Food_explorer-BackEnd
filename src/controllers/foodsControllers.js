const knex = require("../database/knex")
const sqliteConnetion = require("../database/sqlite")


class FoodsController {

 async create(request,response) {

  const { avatar,title, category, ingredients,price,description } = request.body
  const {user_id} = request.params

  const [food_id] = await knex("foods").insert({

    avatar,title,category,price,description,user_id


  })



  const ingredientsInsert = ingredients.map(ingredient => {
    return {
      food_id,
      ingredients:ingredient
    }
  })

  await knex("ingredients").insert(ingredientsInsert)


  response.json("criado com sucesso")




 }





}


module.exports= FoodsController
