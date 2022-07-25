const React = require('react')
const Def = require('../default')

function places (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{places.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = places