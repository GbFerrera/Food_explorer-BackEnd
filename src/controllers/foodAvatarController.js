const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")

class FoodAvatarController {

async update(request, response) {

  
  const avatarFileName = request.file.filename
  const {food_id} = request.params

  const diskStorage = new DiskStorage

  const food = await knex("foods").where({id:food_id}).first()



  if (food.avatar) {

    await diskStorage.deleteFile(food.avatar)
 
  }

  const filename = await diskStorage.saveFile(avatarFileName)
  food.avatar = filename


   await knex("foods").update(food).where({id : food_id})

   return response.json(food)




}
 


}


module.exports = FoodAvatarController