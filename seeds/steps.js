
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step: "Chill a glass mug in the freezer for at least 15 minutes."},
        {id: 2, recipe_id: 1, step: "Combine the butterscotch topping and soda water in the chilled mug; stir until thoroughly mixed. Pour the cream soda into the mug."},
        {id: 3, recipe_id: 1, step: "Stir the whipped cream, caramel sauce, and salt together in a small bowl; spoon atop the soda mixture. Stir lightly; it will froth!"},

        {id: 4, recipe_id: 2, step: "Preheat oven to 375 degrees F (190 degrees C). Press the pie crust pastry evenly into the bottom of a 9-inch pie plate."},
        {id: 5, recipe_id: 2, step: "Mix the syrup, cream, bread crumbs, lemon zest, and lemon juice together in a bowl; pour into the pie crust."},
        {id: 6, recipe_id: 2, step: "Bake in the preheated oven until the filling is set, 35 to 40 minutes. Allow to cool slightly before serving."},


        {id: 7, recipe_id: 3, step: "To Make Crust: Place flour and salt in a large bowl. Mix well, then cut in lard until mixture is crumbly. Stir in water, mixing just until dough forms a ball. Allow dough to rest in refrigerator while you make filling."},
        {id: 8, recipe_id: 3, step: "To Make Filling: Heat a large skillet over medium-high heat. Add vegetable oil, then onions. If using carrots and rutabagas, add them now. Saute vegetables until soft, about 10 minutes."},
        {id: 9, recipe_id: 3, step: "Add ground beef, ground pork, and green onions to skillet. Saute until meat is no longer pink. Add salt and pepper to taste. Preheat the oven to 400 degrees F (200 degrees C)"},
        {id: 10, recipe_id: 3, step: "Divide dough into 12 portions and roll out each one to fit a 9-inch pie plate."},
        {id: 11, recipe_id: 3, step: "Place a pastry circle in a pie pan. Fill one half of pan with meat filling. Dot with some of the butter or margarine. Pat edge of crust with water, then fold over other half of crust. Trim edge, then crimp to seal. Make steam vents in top of crust. Brush with milk. Repeat process until all of dough and all of filling are gone."},
        {id: 12, recipe_id: 3, step: "Bake in preheated oven for 45 minutes or until crust is golden brown."},

        {id: 13, recipe_id: 4, step: "Stir 3 cups apple cider, ginger, cinnamon stick, and cloves together in a saucepan; bring to a boil, reduce heat to low, and simmer until slightly reduced, about 15 minutes."},
        {id: 14, recipe_id: 4, step: "Remove saucepan from heat and immediately stir brown sugar and honey into the cider mixture until dissolved into the liquid."},
        {id: 15, recipe_id: 4, step: "Pour the liquid into a wide glass dish and refrigerate until chilled completely, at least 45 minutes."},
        {id: 16, recipe_id: 4, step: "Mix the chilled apple cider mixture with the remaining apple cider and the pumpkin puree in a large pitcher; stir until the puree dissolves into the liquid."},

        {id: 17, recipe_id: 5, step: "Place white chocolate chips in a microwave-safe 2-cup measuring cup; heat in microwave until melted, about 2 minutes. Stir until smooth."},
        {id: 18, recipe_id: 5, step: "Place lemon drop candies in a resealable plastic bag. Place this bag into another resealable bag, creating a double bag so the candies don't puncture the bag. Crack candies with rolling pin or mallet until broken into small pieces."},
        {id: 19, recipe_id: 5, step: "Stir cracked candies into melted white chocolate. Smooth mixture onto a piece of aluminum foil to about 1/4-inch thickness. Chill in refrigerator until set, at least 30 minutes. Break bark into small pieces and store in an air-tight container in the refrigerator."},

        {id: 20, recipe_id: 6, step: "Beat butter, brown sugar, and white sugar together in a large bowl until creamy using an electric mixer. Add egg, maple syrup, sour cream, vanilla butter and nut flavoring, and pumpkin pie spice. Beat again until combined. Add baking soda and slowly mix in flour, 1/2 cup at a time; dough will be sticky."},
        {id: 21, recipe_id: 6, step: "Chill dough in the refrigerator for 30 minutes."},
        {id: 22, recipe_id: 6, step: "Preheat the oven to 350 degrees F (175 degrees C)."},
        {id: 23, recipe_id: 6, step: "Pour 2 tablespoons white sugar into a shallow bowl. Roll dough into walnut-sized balls using your hands, roll balls in sugar, and place on an ungreased cookie sheet. Flatten each cookie slightly using your palm, and leave space between each, as cookies will spread during baking."},
        {id: 24, recipe_id: 6, step: "Bake in the preheated oven until edges are golden brown, 8 to 10 minutes. Cool on a rack."},
      
        {id: 25, recipe_id: 7, step: "Dissolve the sugar in the warm water in the bowl of a stand mixer fitted with a dough hook. Sprinkle the yeast over the water, and let stand for 5 minutes until the yeast softens and begins to form a creamy foam. Stir in the oil, salt, and 2 cups of flour, and mix on Low until the mixture forms a wet dough. With the machine running, add 1 cup of flour, 1/4 cup at a time, and knead until the dough pulls away from the sides of the bowl into a ball. Knead for 3 to 5 more minutes, until the dough is smooth and elastic."},
        {id: 26, recipe_id: 7, step: "Lightly oil a large bowl, then place the dough in the bowl and turn to coat with oil. Cover with a light cloth and let rise in a warm place (80 to 95 degrees F (27 to 35 degrees C)) until doubled in volume, about 1 hour."},
        {id: 27, recipe_id: 7, step: "Combine the ricotta, mozzarella, and Parmesan cheeses, pepperoni, parsley, Italian seasoning, olives, green pepper, and mushrooms in a large bowl, and set aside."},
        {id: 28, recipe_id: 7, step: "Preheat oven to 375 degrees F (190 degrees C). Line a baking sheet with parchment paper."},
        {id: 29, recipe_id: 7, step: "Punch down the dough, and roll it out into a long, flat strip about 9 inches wide by 30 inches long. Spoon the filling mixture down the center of the dough strip, leaving about 1 inch on all sides for sealing. Pull edges of the dough together; pinch to seal and form a long, filled roll. Place the roll, seam side down, onto the parchment paper in a snakey "S" shape, and tuck the ends underneath to seal. Beat the egg in a bowl with 1 tablespoon of water, and brush the egg wash over the calzone."},
        {id: 30, recipe_id: 7, step: "Bake in the preheated oven for 30 to 35 minutes, until the calzone is golden brown. Let cool for 5 minutes before cutting into individual slices."},
        

        {id: 31, recipe_id: 8, step: "Combine chocolate chips and peanut butter chips in top of double boiler. Stir frequently over low to medium heat until melted; add peanuts and stir."},
        {id: 32, recipe_id: , step: "Drop by teaspoon full on wax paper. Allow to cool."},


        {id: 33, recipe_id: 9, step: "Stir rum and butterscotch schnapps together in a frosted 14-ounce mug."},
        {id: 34, recipe_id: 9, step: "Pour butter flavoring into the cream soda, then turn cream soda over to pour quickly into the chilled mug. Gently drop the ice cream into the soda mixture."},

        {id: 32, recipe_id: 10, step: "Preheat the oven to 325 degrees F (165 degrees C). Grease and flour three 9 inch round cake pans."},
        {id: 33, recipe_id: 10, step: "In a large bowl, dissolve the gelatin in cold water; stir in the cake mix, eggs, vegetable oil, flour and 1/2 of the strawberries. Beat for 5 minutes on the medium speed of an electric mixer. Divide the batter evenly between the prepared cake pans."},
        {id: 34, recipe_id: 10, step: "Bake for 30 to 35 minutes in the preheated oven, or until the layers spring back when lightly pressed in the center. Cool cakes in the pans on wire racks."},
        {id: 35, recipe_id: 10, step: "To Make Frosting: Cream the butter, sugar and the remaining half of the strawberries in a medium bowl until light and fluffy, adding additional confectioners' sugar if needed for a spreadable consistency. Spread the frosting between layers and over the top and sides of cake."},
      ]);
    });
};
