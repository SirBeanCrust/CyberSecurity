import { useState } from 'react'

import './Css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
     <div className="app">
      <header className="header">
        <div className="logo">
          <img src="/path/to/your/logo.png" alt="Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {/* Your main content goes here */}
      </main>
      <footer className="footer">
        {/* Footer content goes here */}
      </footer>
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img  className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img  className="logo react" alt="React logo" />
        </a>
      </div>
    

      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
      
    </>
  )
}

export default App
