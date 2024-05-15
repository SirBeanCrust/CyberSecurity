import { useState, useEffect } from 'react'
import Modal from 'react-modal';

import { Link } from "react-router-dom";
import "./Comp/Routing.jsx";

import './Css/App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const Messaged = localStorage.getItem('messaged');
    if (!Messaged) { 
    const timer = setTimeout(() => {
      setShowMessage(true);
      localStorage.setItem("messaged", "true");
    }, 2000);}
  }, []); 

  const handleCloseMessage = () => {
    setShowMessage(false);
  };


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
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </ul>
        </nav>
      </header>
      <Modal isOpen={showMessage} onRequestClose={handleCloseMessage} className="modal"  style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
        <div className="modal-content">
        <h2>Vi bryr oss om ditt personvern </h2>
        <p>Denne nettsiden bruker Cookies for den beste opplevelsen</p>
        <button onClick={handleCloseMessage}>Aksepter og lukk</button>
        </div>
        
      </Modal>
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
