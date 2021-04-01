
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getRecipes,
    getRecipeById
}

function getRecipes(db = connection) {
    return db('recipes').select()
}

function getRecipeById(id, db = connection) {
    return db('recipes')
        .join('recipeIngredients', 'recipes.id', 'recipeIngredients.recipe_id')
        //.join('ingredients', 'ingredients.recipe_id', 'recipes.')
        .where('id', id)
        .select()
}