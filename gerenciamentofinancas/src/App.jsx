import './App.css'
import Finance from './Components/Finance'

// Aplicativo de gerenciamento financeiro pessoal

function App() {

  return (
    <>
      <header>
        <img src="./src/assets/icons8-financial-64.png" alt="img" />
        <h1>Gerenciador Financeiro Pessoal</h1>
      </header>
      <main>
        <Finance/>
      </main>

    </>
  )
}

export default App
