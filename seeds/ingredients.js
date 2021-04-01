
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'butterscotch topping'},
        {id: 2, name: 'soda water'},
        {id: 3, name: 'cream soda'},
        {id: 4, name: 'whipped cream'},
        {id: 5, name: 'caramel sauce'},
        {id: 6, name: 'pinch salt'},
        {id: 7, name: '9 inch pie crust'},
        {id: 8, name: 'golden syrup'},
        {id: 9, name: 'heavy cream'},
        {id: 10, name: 'bread crumbs'},
        {id: 11, name: 'lemon, zested'},
        {id: 12, name: 'lemon juice'},
        {id: 13, name: 'all-purpose flour'},
        {id: 14, name: 'salt'},
        {id: 15, name: 'lard'},
        {id: 16, name: 'cold water'},
        {id: 17, name: 'vegetable oil'},
        {id: 18, name: 'onion, finely diced'},
        {id: 19, name: 'carrots, diced (Optional)'},
        {id: 20, name: 'lean ground beef'},
        {id: 21, name: 'ground pork'},
        {id: 22, name: 'green onions, chopped'},
        {id: 23, name: 'salt and pepper to taste'},
        {id: 24, name: 'butter'},
        {id: 25, name: 'milk'},
        {id: 26, name: 'apple cider, divided'},
        {id: 27, name: 'fresh ginger, sliced'},
        {id: 28, name: 'cinnamon stick'},
        {id: 29, name: 'whole cloves'},
        {id: 30, name: 'brown sugar'},
        {id: 31, name: 'honey'},
        {id: 32, name: 'pumpkin puree'},
        {id: 33, name: 'white chocolate chips'},
        
      ]);
    });
};
