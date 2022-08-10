const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/thai.jpg',
//     cite: 'https://unsplash.com/@grisskitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
//     photographer: 'Max Griss',
//     unsplash: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/cafe.jpg',
//     cite: 'https://unsplash.com/es/@rebaspike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
//     photographer:"Reba Spike",
//     unsplash: "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
// }]