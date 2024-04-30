import './App.css'
import { Converter } from './components/Converter'
import { Header } from './components/Header'
import { Saved } from './components/Saved'

function App () {
  return (
    <>
      <Header />
      <main>
        <article>
          <h2>convert</h2>
          <Converter />
        </article>
      </main>
      <Saved />
    </>
  )
}

export default App
