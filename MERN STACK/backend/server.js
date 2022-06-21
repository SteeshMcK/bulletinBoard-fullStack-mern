// server.js - started on June 20, 2022
// require 'dotenv' to use Node Environment Variables
require('dotenv').config()

// file requirements
const express = require('express')
const mongoose = require('mongoose')
const bulletinRoutes = require('./routes/bulletins')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes - pulls routes in from route file
app.use('/api/bulletins', bulletinRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    // start listening for requests after connection to database
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port', process.env.PORT)
})
 })
 .catch((error) => {
    console.log(error)
 })


