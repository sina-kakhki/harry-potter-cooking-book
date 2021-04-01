exports.up = (knex) => {
    return knex.schema.createTable('recipeIngredients', (table) => {
      table.integer('recipe_id').references('recipes.id')
      table.integer('ingredient_id').references('ingredients.id')
      table.string('quantity')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('recipeIngredients')
  }