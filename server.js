const express = require('express')
const hbs = require('express-handlebars')

const server = express()
const recipeRoutes = require('./recipeRoutes')


// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
// Routes config - change here to match the hbs files
server.use('/recipe', recipeRoutes)


// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

module.exports = server

server.get('/', (req, res) => {
    res.render('home')
})