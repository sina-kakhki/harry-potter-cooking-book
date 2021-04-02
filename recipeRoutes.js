const express = require('express')
const db = require('./db')

const router = express.Router()

module.exports = router

//placeholder routers - will work once configured with db & db functions

// this route is for find.hbs - to display all recipes
router.get('/', (req, res) => {
    return db.getRecipes()
        .then(recipes => {
            return res.render('find', { recipes: recipes })
        })
        .catch(err => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

// this route is for detail.hbs - to show an individual recipe
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    return Promise.all([db.getRecipeById(id), db.getIngredientsById(id), db.getDetailsById(id), db.getStepsById(id)])
        .then(results => {
            res.render('details', { recipe: results[0], ingredients: results[1], details: results[2], steps: results[3] })
        })
        .catch(err => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

//
router.post('/', (req, res) => {
    const search = req.body.search
    return db.searchRecipes(search)
        .then(result => {
            console.log(result)
            return res.render('find', { recipes: result})
        })
        .catch(err => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})
