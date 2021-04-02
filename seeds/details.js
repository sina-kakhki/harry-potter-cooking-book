
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('details').del()
    .then(function () {
      // Inserts seed entries
      return knex('details').insert([
        {id: 1, recipe_id: 1, prepTime: 20, additionalTime: 15, servings: 10, yield: 20,}, 
        {id: 2, recipe_id: 2, prepTime: 25, additionalTime: 10, servings: 4, yield: 8,},
        {id: 3, recipe_id: 3, prepTime: 40, additionalTime: 15, servings: 4, yield: 4,},
        {id: 4, recipe_id: 4, prepTime: 35, additionalTime: 20, servings: 8, yield: 10,},
        {id: 5, recipe_id: 5, prepTime: 25, additionalTime: 10, servings: 6, yield: 8},
        {id: 6, recipe_id: 6, prepTime: 60, additionalTime: 30, servings: 6, yield: 8,},
        {id: 7, recipe_id: 7, prepTime: 40, additionalTime: 10, servings: 3, yield: 5,},
        {id: 8, recipe_id: 8, prepTime: 20, additionalTime: 5, servings: 4, yield: 4,},
        {id: 9, recipe_id: 9, prepTime: 40, additionalTime: 15, servings: 12, yield: 20,},
        {id: 10, recipe_id: 10, prepTime: 60, additionalTime: 40, servings: 8, yield: 8,},
      ]);
    });
};
