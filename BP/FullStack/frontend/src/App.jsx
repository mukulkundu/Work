import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])


  useEffect(() =>{
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)            //no need to convert to json as we are using axios, axios handles it by itself
    }).catch((error) => {
      console.log(error);
      
    })
  }, [])

  return (
    <>
    <h1>Chai aur Full Stack</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
