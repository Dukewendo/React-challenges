import React from 'react';
import Joke from './Joke';
import jokesData from './jokesData';


export default function App() {

    const jokeElement = jokesData.map(joke => {
        return <Joke key = {joke.id} setup= {joke.setup} punchline={joke.punchline} />
    })
    
    
    return(
    
        <div>
            {jokeElement}
        </div>
    )
}