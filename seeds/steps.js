
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, recipe_id: 1, step: "Chill a glass mug in the freezer for at least 15 minutes."},
        {id: 2, recipe_id: 1, step: "Combine the butterscotch topping and soda water in the chilled mug; stir until thoroughly mixed. Pour the cream soda into the mug."},
        {id: 3, recipe_id: 1, step: "Stir the whipped cream, caramel sauce, and salt together in a small bowl; spoon atop the soda mixture. Stir lightly; it will froth!"},

        {id: 4, recipe_id: 2, step: "Preheat oven to 375 degrees F (190 degrees C). Press the pie crust pastry evenly into the bottom of a 9-inch pie plate."},
        {id: 5, recipe_id: 2, step: "Mix the syrup, cream, bread crumbs, lemon zest, and lemon juice together in a bowl; pour into the pie crust."},
        {id: 6, recipe_id: 2, step: "Bake in the preheated oven until the filling is set, 35 to 40 minutes. Allow to cool slightly before serving."}


        {id: 7, recipe_id: 3, step: "To Make Crust: Place flour and salt in a large bowl. Mix well, then cut in lard until mixture is crumbly. Stir in water, mixing just until dough forms a ball. Allow dough to rest in refrigerator while you make filling."},
        {id: 8, recipe_id: 3, step: "To Make Filling: Heat a large skillet over medium-high heat. Add vegetable oil, then onions. If using carrots and rutabagas, add them now. Saute vegetables until soft, about 10 minutes."},
        {id: 9, recipe_id: 3, step: "Add ground beef, ground pork, and green onions to skillet. Saute until meat is no longer pink. Add salt and pepper to taste. Preheat the oven to 400 degrees F (200 degrees C)"},
        {id: 10, recipe_id: 3, step: "Divide dough into 12 portions and roll out each one to fit a 9-inch pie plate."},
        {id: 10, recipe_id: 3, step: "Place a pastry circle in a pie pan. Fill one half of pan with meat filling. Dot with some of the butter or margarine. Pat edge of crust with water, then fold over other half of crust. Trim edge, then crimp to seal. Make steam vents in top of crust. Brush with milk. Repeat process until all of dough and all of filling are gone."},
        {id: 10, recipe_id: 3, step: "Bake in preheated oven for 45 minutes or until crust is golden brown."},

        {id: 10, recipe_id: 4, step: "Stir 3 cups apple cider, ginger, cinnamon stick, and cloves together in a saucepan; bring to a boil, reduce heat to low, and simmer until slightly reduced, about 15 minutes."},
        {id: 10, recipe_id: 4, step: "Remove saucepan from heat and immediately stir brown sugar and honey into the cider mixture until dissolved into the liquid."},
        {id: 10, recipe_id: 4, step: "Pour the liquid into a wide glass dish and refrigerate until chilled completely, at least 45 minutes."},
        {id: 10, recipe_id: 4, step: "Mix the chilled apple cider mixture with the remaining apple cider and the pumpkin puree in a large pitcher; stir until the puree dissolves into the liquid."},

        {id: 10, recipe_id: 13, step: ""},
      ]);
    });
};
