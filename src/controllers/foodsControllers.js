const knex = require("../database/knex")

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

 async show (request,response){

  const {id} = request.params

  const food = await knex("foods").where({id}).first()
  const ingredients = await knex("ingredients").where({food_id: id})


  return response.json({

   ...food,
   ingredients

  })


 }

async delete (request,response){

const {id} = request.params

await knex("foods").where( {id} ).delete()

 return response.json("Apagado com sucesso!")


} 

async update (request, response){
 

  const { avatar,title, category, ingredients,price,description } = request.body
  const {user_id} = request.params
  const {food_id} = request.params



   await knex("foods")
   .where({ id: food_id, user_id: user_id })
   .update({ avatar,title, category,price,description })


  

response.json("Atualizado com sucesso")



}



}


module.exports= FoodsController
