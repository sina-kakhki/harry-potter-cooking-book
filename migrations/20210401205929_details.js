exports.up = (knex) => {
    return knex.schema.createTable('details', (table) => {
      table.increments('id').primary()
      table.integer('recipe_id')
      table.integer('prepTime')
      table.integer('additionalTime')
      table.string('servings')
      table.string('yield')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('details')
  }