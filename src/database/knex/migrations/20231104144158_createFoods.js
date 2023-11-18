

exports.up = knex => knex.schema.createTable("foods", table => {

  table.increments("id");

  table.text("avatar");
  table.text("title");
  table.text("category");
  table.integer("ingredients_id").references("id").inTable("ingredients");
  table.integer("price");
  table.text("description");
 
  
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());

}) 

exports.down = knex => knex.schema.dropTable("foods") 
