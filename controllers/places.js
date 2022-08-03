const router = require('express').Router()
const places = require("../models/places")

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
  })

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  // console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '/images/default.jpeg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id]})
  }
})

module.exports = router