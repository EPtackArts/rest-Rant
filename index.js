//Dependencies
const express = require('express')

//Configuration
require('dotenv').config()
const app = express()

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use('/places', require('./controllers/places'))

//Routes
app.get('/', (req, res) => {
    res.render('home')
})

// Breads
const placesController = require('./controllers/places.js')
app.use('/places', placesController)

//404
app.get('*', (req, res) => {
    res.render('error404')
})

//Listen
app.listen(process.env.PORT)
