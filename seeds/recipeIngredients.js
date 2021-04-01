
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeIngredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: '2 tablespoons' },
        {recipe_id: 1, ingredient_id: 2, quantity: '1 cup'},
        {recipe_id: 1, ingredient_id: 3, quantity: '1 cup'},
        {recipe_id: 1, ingredient_id: 4, quantity: '2 tablespoons'},
        {recipe_id: 1, ingredient_id: 5, quantity: '2 tablespoons' },
        {recipe_id: 1, ingredient_id: 6, quantity: '1'},
        {recipe_id: 2, ingredient_id: 7, quantity: '1'},
        {recipe_id: 2, ingredient_id: 8, quantity: '1 cup'},
        {recipe_id: 2, ingredient_id: 9, quantity: '1/4 cup'},
        {recipe_id: 2, ingredient_id: 10, quantity: '1 cup'},
        {recipe_id: 2, ingredient_id: 11, quantity: '1 '},
        {recipe_id: 2, ingredient_id: 12, quantity: '2 tablespoons'},
        {recipe_id: 3, ingredient_id: 13, quantity: '4 cups '},
        {recipe_id: 3, ingredient_id: 14, quantity: '1 teaspoon'},
        {recipe_id: 3, ingredient_id: 15, quantity: '2 cups'},
        {recipe_id: 3, ingredient_id: 16, quantity: '1 cup'},
        {recipe_id: 3, ingredient_id: 17, quantity: '3 tablespoons'},
        {recipe_id: 3, ingredient_id: 18, quantity: '1'},
        {recipe_id: 3, ingredient_id: 19, quantity: '5'},
        {recipe_id: 3, ingredient_id: 69, quantity: '2'},
        {recipe_id: 3, ingredient_id: 21, quantity:  '1 pound'},
        {recipe_id: 3, ingredient_id: 22, quantity: '10'},
        {recipe_id: 3, ingredient_id: 23, quantity: ''},
        {recipe_id: 3, ingredient_id: 24, quantity: '1/2 cup'},
        {recipe_id: 3, ingredient_id: 25, quantity: '2 tablespoons'},
        {recipe_id: 4, ingredient_id: 26, quantity: '2 quarts'},
        {recipe_id: 4, ingredient_id: 27, quantity: '1 (2 inch) piece'},
        {recipe_id: 4, ingredient_id: 28, quantity: '1'},
        {recipe_id: 4, ingredient_id: 29, quantity: '1/2 teaspoon'},
        {recipe_id: 4, ingredient_id: 30, quantity: '1/2 cup'},
        {recipe_id: 4, ingredient_id: 31, quantity: '1/4 cup'},
        {recipe_id: 4, ingredient_id: 32, quantity: '1 (28 ounce) can'},
        {recipe_id: 5, ingredient_id: 33, quantity: '1 (12 ounce) package'},
        {recipe_id: 5, ingredient_id: 34, quantity: '3/4 cup'},        
        {recipe_id: 6, ingredient_id: 35, quantity: '3/4 cup'},
        {recipe_id: 6, ingredient_id: 36, quantity: '3/4 cup'},
        {recipe_id: 6, ingredient_id: 43, quantity: '1/2 cup'},
        {recipe_id: 6, ingredient_id: 37, quantity: '1 large'},
        {recipe_id: 6, ingredient_id: 38, quantity: '2 tablespoons'},
        {recipe_id: 6, ingredient_id: 39, quantity: '2 tablespoons'},
        {recipe_id: 6, ingredient_id: 40, quantity: '2 teaspoons'},
        {recipe_id: 6, ingredient_id: 41, quantity: '1/2 teaspoon'},
        {recipe_id: 6, ingredient_id: 42, quantity: '2 teaspoons'},
        {recipe_id: 6, ingredient_id: 13, quantity: '2 cups'},
        {recipe_id: 6, ingredient_id: 43, quantity: '2 tablespoons'},
        {recipe_id: 7, ingredient_id: 43, quantity: '1 teaspoon'},
        {recipe_id: 7, ingredient_id: 44, quantity: '1 cup'},
        {recipe_id: 7, ingredient_id: 45, quantity: '1 (.25 ounce) package'},
        {recipe_id: 7, ingredient_id: 46, quantity: '2 tablespoons'},
        {recipe_id: 7, ingredient_id: 47, quantity: '1 1/2 teaspoons'},
        {recipe_id: 7, ingredient_id: 13, quantity: '3 cups'},
        {recipe_id: 7, ingredient_id: 48, quantity: 'ricotta cheese'},
        {recipe_id: 7, ingredient_id: 49, quantity: '2 cups'},
        {recipe_id: 7, ingredient_id: 70, quantity: '1/4 cup grated'},
        {recipe_id: 7, ingredient_id: 50, quantity: '1 (4 ounce) package'},
        {recipe_id: 7, ingredient_id: 51, quantity: '1 tablespoon'},
        {recipe_id: 7, ingredient_id: 52, quantity: '1/2 teaspoon'},
        {recipe_id: 7, ingredient_id: 53, quantity: '1/2 cup sliced'},
        {recipe_id: 7, ingredient_id: 54, quantity: '1/2'},
        {recipe_id: 7, ingredient_id: 55, quantity: '1/2 cup sliced'},
        {recipe_id: 7, ingredient_id: 37, quantity: '2'},
        {recipe_id: 7, ingredient_id: 44, quantity: '1 tablespoon'},
        {recipe_id: 8, ingredient_id: 56, quantity: '1 (12 ounce) package'},
        {recipe_id: 8, ingredient_id: 57, quantity: '1 (12 ounce) package'},
        {recipe_id: 8, ingredient_id: 58, quantity: '12 ounces'},
        {recipe_id: 9, ingredient_id: 59, quantity: '1 fluid ounce'},
        {recipe_id: 9, ingredient_id: 60, quantity: '1 fluid ounce'},
        {recipe_id: 9, ingredient_id: 61, quantity: '1/2 teaspoon'},
        {recipe_id: 9, ingredient_id: 62, quantity: '1 (12 fluid ounce)'},
        {recipe_id: 9, ingredient_id: 63, quantity: '1 small scoop'},
        {recipe_id: 10, ingredient_id: 64, quantity: '1 (3 ounce) package'}
        {recipe_id: 10, ingredient_id: 16, quantity: '1/2 cup'}
        {recipe_id: 10, ingredient_id: 65, quantity: '1 (18.25 ounce) package'}
        {recipe_id: 10, ingredient_id: 37, quantity: '4'}
        {recipe_id: 10, ingredient_id: 7, quantity: '1 cup'}
        {recipe_id: 10, ingredient_id: 13, quantity: '3 tablespoons'}
        {recipe_id: 10, ingredient_id: 66, quantity: '1 (10 ounce) package'}
        {recipe_id: 10, ingredient_id: 67, quantity: '6 tablespoons'}
        {recipe_id: 10, ingredient_id: 68, quantity: '2 cups'}
      ]);
    });
};
