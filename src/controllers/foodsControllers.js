const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class FoodsController {
  async create(request, response) {
    const { title, category, ingredient, price, description } = request.body;
    const user_id = request.user.id;

    const avatarFileName = request.file.filename;

    const diskStorage = new DiskStorage();

    const filename = await diskStorage.saveFile(avatarFileName);

    const [food_id] = await knex("foods").insert({
      avatar: filename,
      title,
      category,
      price,
      description,
      user_id,
    });

    const ingredientsInsert = ingredient.map((ingredient) => {
      return {
        food_id,
        ingredients: ingredient,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);

    response.json("criado com sucesso");
  }

  async show(request, response) {
    try {
      const { id } = request.params;
  
      const food = await knex("foods").where({ id }).first();

     
  
      if (!food) {
        return response.status(404).json({ error: "Produto não encontrado" });
      }
  
      const ingredients = await knex("ingredients").where({ food_id: id });


  
      return response.json({
        avatar: food.avatar, 
        title: food.title,
        description: food.description,
        ingredients: ingredients.map(ingredientName => ingredientName.ingredients)
      });
    } catch (error) {
      console.error("Erro ao obter dados do produto:", error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("foods").where({ id }).delete();

    return response.json("Apagado com sucesso!");
  }

  async update(request, response) {
    const { id } = request.params;
    const user_id = request.user.id;
    const { title, category, ingredient, price, description } = request.body;

    const avatarFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const food = await knex("foods").where({ id }).first();

    console.log(food, ingredient);

    if (food.avatar) {
      await diskStorage.deleteFile(food.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFilename);

    food.avatar = food.avatar ?? filename;
    food.title = title ?? food.title;
    food.description = description ?? food.description;
    food.category = category ?? food.category;
    food.price = price ?? food.price;
    food.user_id = user_id ?? food.user_id;

    await knex("foods").where({ id }).update(food);

    const existingIngredients = await knex('ingredients')
    .where({ food_id: id })
    .select('ingredients');
  
  const existingIngredientNames = existingIngredients.map(ingredient => ingredient.ingredients);
  
  const ingredientArray = Array.isArray(ingredient) ? ingredient : [ingredient];
  
 
  const hasChanges = !arraysAreEqual(existingIngredientNames, ingredientArray);
  
  if (hasChanges) {
    
    await knex('ingredients').where({ food_id: id }).del();
  
    await knex('ingredients').insert(ingredientArray.map(ingredientName => ({ food_id: id, ingredients: ingredientName })));
  }
  
  function arraysAreEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }
    


    response.json("Atualizado com sucesso");
  }

  async index (request,response){

    try {
      const foods = await knex("foods").select("*");
      return response.json(foods);
    } catch (error) {
      console.error("Erro ao obter dados das comidas:", error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    }
   

  }
}

module.exports = FoodsController;
