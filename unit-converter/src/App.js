import './App.css'
import { Converter } from './components/Converter'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Saved } from './components/Saved'

function App () {
  return (
    <>
      <Header />

      <main>
        <article className='convert'>
          <h2>convert</h2>
          <Converter />
        </article>

        <section>
          <h4>saved</h4>
          <Saved />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
