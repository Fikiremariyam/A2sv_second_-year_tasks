import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { people } from './components/people'
import { getImages} from './components/utils'

import './App.css'



export  function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImages(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}


function Profile({title,showTitle}) {
  return (
  <>
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
     
    />
    <br/>
    <br/>
    
    {showTitle && <h2>{title}</h2>}
  
  </>
  );
}

export  function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile 
      title="Katherine Johnson"
      showTitle={true}
      />
      <Profile 
      title="Katherine Johnson"
      showTitle={true}
      />
      <Profile 
      title="Katherine Johnson"
      showTitle={true}
      />
    </section>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    <Gallery />
    <List/>


    </>
  )
}

export default App
