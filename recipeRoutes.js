const express = require('express')

const router = express.Router()

module.exports = router


router.get('/', (req, res) => {
    res.send('<h1>Hello Recipes</h1>')
})