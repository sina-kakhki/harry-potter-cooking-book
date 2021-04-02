exports.up = (knex) => {
    return knex.schema.createTable('recipes', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('description')
      table.string('tags')
      table.string('image')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('recipes')
  }