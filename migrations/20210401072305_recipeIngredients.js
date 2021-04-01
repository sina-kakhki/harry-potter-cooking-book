exports.up = (knex) => {
    return knex.schema.createTable('recipeIngredients', (table) => {
      table.integer('recipe_id').references('recipes.id')
      table.integer('ingredients_id').references('ingredients.id')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('recipeIngredients')
  }