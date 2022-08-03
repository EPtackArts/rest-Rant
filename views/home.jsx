const React = require('react')
const Def = require('./default')

function  home () {
    return (
        <Def>
            <main>
                <h1>REST-rant</h1>
                <div>
                    <img src="/images/sushi.jpg" alt="sushi" width="400px"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@metzograf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Florian Metzner</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home