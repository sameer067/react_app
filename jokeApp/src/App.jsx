import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState("Getting Your Joke...");

  const setHeader = {
    headers: {
      Accept: "application/json"
    }
  }

  const getJoke = async ()=>{
    const apiCall = await fetch('https://icanhazdadjoke.com/', setHeader);
    const jokeJson = await apiCall.json();
    const jokeContent = jokeJson.joke;
    
    setJoke(jokeContent);
  }

  useEffect(()=>{
    getJoke()
  }, []);

  return (
    <>
        <div className="outerCont">
          <div className="jokeHeading">🌹Your Awesome Jokes!!🌹</div>
          <div className="jokeSection">
            <div className="jokeBox">
              {joke}
            </div>
            <div className="getNewJoke">
              <div className="newJokeBtn" onClick={getJoke}>
                Next Joke
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
