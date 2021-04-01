
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Butterbeer II', description: 'desc', tags: ''},
        {id: 2, name: 'Treacle Tart', description: 'desc', tags: ''},
        {id: 3, name: 'rowValue1', description: 'desc', tags: ''}
      ]);
    });
};
