const express = require('express')
const db = require('./db')

const router = express.Router()

module.exports = router

//placeholder routers - will work once configured with db & db functions

// this route is for find.hbs - to display all recipes
router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipes => {
            console.log(recipes)
            return res.render('find', { recipes: recipes })
        })
        .catch(err => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

// this route is for detail.hbs - to show an individual recipe
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    return Promise.all([db.getIngredientsById(id), db.getDetailsById(id), db.getStepsById(id)])
    .then(results => {
        res.render('details', { ingredients: results[0], details: results[1], steps: results[2] })
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
  })