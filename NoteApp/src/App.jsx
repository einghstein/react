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
      <button onClick={handleClick} type='checkbox' />
      <h1>{name}</h1>
    </div>
  )
}

function App() {
  function handleClick() {
    const newName = prompt('Enter the name for the new Thing:', 'New Thing');
    if (newName) {
      const newThing = <li key={newName}><Thing initName={newName} /></li>;
      const list = document.getElementById('list');
      list.appendChild(newThing);
      console.log('New Thing added:', newName);
    }
  }
  return (
    <div className="App">
        <list id="list">
          <li><Thing initName="skibidys" /></li>
        </list> <br />
        <button onClick={handleClick}>Add thing to-do</button>
    </div>
  )
}

export default App