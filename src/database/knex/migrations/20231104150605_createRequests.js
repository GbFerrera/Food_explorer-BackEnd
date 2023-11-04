exports.up = knex => knex.schema.createTable("requests", table => {

  table.increments("id");
  table.integer("User_id").references("id").inTable("users").onDelete("CASCADE");
  table.integer("Food_id").references("id").inTable("foods").onDelete("CASCADE");
  table.integer("Quantidade");
  table.timestamp("created_at").default(knex.fn.now());

}) 

exports.down = knex => knex.schema.dropTable("requests") 
