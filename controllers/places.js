const router = require('express').Router()

router.post('/', (req, res) => {
  res.send('POST /places stub')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get ('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/cafe.jpg',
    cite: 'https://unsplash.com/es/@rebaspike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    photographer:"Reba Spike",
    unsplash: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/thai.jpg',
    cite: 'https://unsplash.com/@grisskitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    photographer: 'Max Griss',
    unsplash: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    }]
    res.render('places/index', {places})
})

module.exports = router