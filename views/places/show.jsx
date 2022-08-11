const React = require('react')
const Def = require('../default')

function show(data) {
  let message = ' '
    if (data.message) {
      message = (
        <h4 className="alert-danger"> {data.message}</h4>
      )
    }
    return (
      <Def>
        <main>
          <h1>{data.place.name}</h1>
          <div>
            <img id="placepic" src={data.place.pic} alt={data.place.name}/>
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            <h2>Rating</h2>
            <p>Not Rated</p>
          </div>
          <div>
            <h2>Description</h2>
            <h3> {data.place.showEstablished} </h3>
            <p className="text-center">
            {data.place.cuisines} <br/> Located in {data.place.city}, {data.place.state}
            </p>
          </div>
          <div>
            <hr/>
            <h2>Comments</h2>
            <p>Be the first to comment!</p>
          </div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit Place
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete Place
            </button>
          </form>
        </main>
      </Def>
    );
  }

module.exports = show