
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Harry Potter Butterbeer Recipe', description: 'A most popular wizarding beverage, butterbeers flavor is described as being similar to butterscotch. Pretty quick and easy', tags: '', 
      image: 'Harry Potter Butterbeer Recipe.png'},
        {id: 2, name: 'Treacle Tart', description: 'One of Harry Potters favorite dishes, treacle tart is a traditional English pastry with a sugary filling thats often topped off with a serving of clotted cream', tags: ''},
        {id: 3, name: 'Cornish Pasties', description: 'These perfectly flaky and golden pastries are stuffed with beef, pork, and root vegetables for a hearty dish.', tags: ''},
        {id: 4, name: 'Wizarding World Pumpkin Juice', description: 'Refreshing whether youre riding the Hogwarts Express or just hanging out at home', tags: ''},
        {id: 5, name: 'Lemon Drop Bark', description: 'Albus Dumbledore adores lemon drop candy so much that its used as his office password in Chamber of Secrets.', tags: ''},
        {id: 6, name: 'Butterbeer Sugar Cookies', description: 'Lightly butterscotchy, with vanilla and brown sugar accents, just like the Wizarding World drink!', tags: ''},
        {id: 7, name: 'Calzone Snake', description: 'Whether youre a Slytherin fan, or just want to recreate the slaying of Nagini by Neville Longbottom, this calzone snake is sure to be the star of your spread', tags: ''},
        {id: 8, name: 'Cockroach Clusters', description: 'A Honeydukes specialty and Weasley boys favorite, chocolatey cockroach clusters are bite-sized treats that are perfect for tricking friends into eating bugs', tags: ''},
        {id: 9, name: 'Adult Butterbeer', description: 'Although the butterbeer in the books isnt alcoholic, that shouldnt stop you from splashing a little booze in your next batch', tags: ''},
        {id: 10, name: 'Harrys Birthday Cake', description: 'Recreate that iconic dessert with a batch of sweet strawberry cake', tags: ''},
        
        ]);
    });
};
