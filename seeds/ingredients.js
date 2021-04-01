
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'butterscotch topping'},
        {id: 2, name: 'soda water'},
        {id: 3, name: 'cream soda'},
        {id: 4, name:'whipped cream'},
        {id: 5, name: 'caramel sauce'},
        {id: 6, name: 'pinch salt'},
        {id: , name: '9 inch pie crust pastry},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
        {id: , name: ''},
      ]);
    });
};
