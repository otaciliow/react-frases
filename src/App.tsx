import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png';

function App() {

  return (
    <main>
      <div className="container">
        <img src={logoImg} alt="Logo frases" className="logo" />
        <section className="categories">
          <h2 className="title">Categorias</h2>
          <div className="categories-wrapper">
            <button className="category-button">Motivação</button>
            <button className="category-button">Bom dia</button>
          </div>
        </section>
        <button className="button-quote">Gerar frase</button>
        <p className="text-quote">Alguma frase vai vir aqui</p>
      </div>
    </main>
  )
}

export default App
