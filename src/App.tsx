// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { simpleProducts } from './data'

const App = () => {
  return (
    <div>
      <header>TS EmarhZone</header>
      <main>
        <ul>
          {simpleProducts.map((product) => (
            <li>
              <img src={product.image} alt="" />
              <h2>{product.name}</h2>
            </li>
          ))}
        </ul>
      </main>
      <footer>All Right Reserved</footer>
    </div>
  )
}

export default App
