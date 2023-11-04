

exports.up = knex => knex.schema.createTable("favorites", table => {

  table.increments("id");
  table.integer("User_id").references("id").inTable("users").onDelete("CASCADE");
  table.integer("Food_id").references("id").inTable("foods").onDelete("CASCADE");

  
  table.timestamp("created_at").default(knex.fn.now());
 

}) 

exports.down = knex => knex.schema.dropTable("favorites") 
