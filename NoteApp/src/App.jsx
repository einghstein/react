import { useState } from 'react'
import './App.css'
import './index.css'

function Thing({ initName }) {
  const [name, setName] = useState(initName)

  const handleClick = () => {
    setName(prompt('Enter new name:', name))
  }

  return (
    <div className="Thing" style={{ marginTop: '20px' }}>
      <button onClick={handleClick}>rename</button>
      <h1>{name}</h1>
    </div>
  )
}

function App() {
  const [things, setThings] = useState([
    { id: 1, name: "skibidys" }
  ])

  function handleClick() {
    const newName = prompt('Enter the name for the new Thing:', 'New Thing')
    if (newName) {
      const newThing = { id: Date.now(), name: newName }
      setThings([...things, newThing])
    }
  }

  return (
    <div className="App">
      <ul>
        {things.map((thing) => (
          <li key={thing.id}>
            <Thing initName={thing.name} />
          </li>
        ))}
      </ul>
      <br />
      <button onClick={handleClick}>Add thing to-do</button>
    </div>
  )
}

export default App
