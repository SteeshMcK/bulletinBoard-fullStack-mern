const express = require('express')

// invoke express router and assign to variable
const router = express.Router()

// GET - calls all of the bulletins
router.get('/', (req, res) => {
    res.json({mssg: 'GET all bulletins'})
})

// GET - calls a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single bulletin'})
})

// POST - create a bulletin
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new bulletin'})
})

// DELETE - delete a bulletin
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a bulletin'})
})

// UPDATE - update a bulletin
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a bulletin'})
})

// export router
module.exports = router

