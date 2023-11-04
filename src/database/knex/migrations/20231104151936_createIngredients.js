exports.up = knex => knex.schema.createTable("ingredients", table => {

  table.increments("id");
  table.integer("Food_id").references("id").inTable("foods").onDelete("CASCADE");
  table.text("ingredients")

}) 

exports.down = knex => knex.schema.dropTable("ingredients") 
