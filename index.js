//Dependencies
const express = require('express')

//Configuration
require('dotenv').config()
const app = express()

//Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/places', require('./controllers/places'))

//Routes
app.get('/', (req, res) => {
    res.render('home')
})

//404
app.get('*', (req, res) => {
    res.render('error404')
})

//Listen
app.listen(process.env.PORT)
