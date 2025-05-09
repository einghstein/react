import { useState } from 'react'
import './App.css'
import './index.css'

function Thing({ initName }) {
  const [name, setName] = useState(initName)
  const [checked, setChecked] = useState(false)

  const handleRename = () => {
    setName(prompt('Enter new name:', name))
  }

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div className="Thing">
      <div className="thing-content">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="thing-checkbox"
        />
        <h1 className={checked ? "thing-text checked" : "thing-text"}>
          {name}
        </h1>
        <button onClick={handleRename}>Rename</button>
      </div>
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
      <ul style={{ padding: 0 }}>
        {things.map((thing) => (
          <li key={thing.id}>
            <Thing initName={thing.name} />
          </li>
        ))}
      </ul>
  
      <button onClick={handleClick} id='Add-button'>
        Add thing to-do
      </button>
    </div>
  )  
}

export default App
