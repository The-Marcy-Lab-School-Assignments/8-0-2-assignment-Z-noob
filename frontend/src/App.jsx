import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Home Page</h1>
      <h3>Navigate by adding these paths to the end of the link:</h3>
      <ul>
        <li><a href="/">/ (home:do not  add this part)</a></li>
        <li><a href="/no">/no</a></li>
        <li><a href="/about">/about</a></li>
        <li><a href="/api/search">/api/search</a></li>
        <li><a href="/api/data">/api/data</a></li>
      </ul>
    </>
  )
}

export default App
