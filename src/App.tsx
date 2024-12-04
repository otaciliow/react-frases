import { useState } from 'react'
import './App.min.css'

import logoImg from './assets/logo.png';

function App() {

  const [quote, setQuote] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);

  const allQuotes = [
    {
      id: 1,
      name: 'Motivação',
      quotes: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]
    },
    {
      id: 2,
      name: 'Bom dia',
      quotes: [
        'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!',
        'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!',
        'Escreva em seu coração: todo dia é o melhor dia do ano.',
        'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.',
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setSelectedCategory(index);
  }

  function generateQuote() {
    let randomNumber = Math.floor(Math.random() * allQuotes[selectedCategory].quotes.length);

    setQuote(`"${allQuotes[selectedCategory].quotes[randomNumber]}"`);
  }

  return (
    <main>
      <div className="container">
        <img src={logoImg} alt="Logo frases" className="logo" />
        <section className="categories">
          <h2 className="title">Categorias</h2>
          <div className="categories-wrapper">
            {allQuotes.map( (item, index) => (
              <button key={item.id} className="category-button" onClick={() => handleSwitchCategory(index)} style={{
                borderColor: item.name === allQuotes[selectedCategory].name ? "#1fa4db" : "transparent"
                }}>
                {item.name}
              </button>
            ))}
          </div>
        </section>

        <button className="button-quote" onClick={generateQuote}>Gerar frase</button>

        {quote !== '' && <p className="text-quote">{quote}</p>}

      </div>
    </main>
  )
}

export default App
