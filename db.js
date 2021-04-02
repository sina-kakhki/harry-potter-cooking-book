const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getRecipes,
    getRecipeById,
    getStepsById
}

function getRecipes(db = connection) {
    return db('recipes').select()
}

function getRecipeById(id, db = connection) {
    return db('recipeIngredients')
        .join('recipes', 'recipes.id', 'recipeIngredients.recipe_id')
        .join('ingredients', 'ingredients.id', 'recipeIngredients.ingredient_id',)
        .where('recipeIngredients.recipe_id', id)
        .select()
}

function getStepsById(id, db = connection) {
    return db('recipes')
        .join('steps', 'recipes.id', 'steps.recipe_id')
        .where('recipes.id', id)
        .select('recipes.id as recipesId', 'steps.id as stepsId', 'step')
}