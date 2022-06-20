require('dotenv').config()

// file requirements
const express = require('express')
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

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
