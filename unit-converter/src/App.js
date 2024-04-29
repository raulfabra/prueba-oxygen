import './App.css'
import { Converter } from './components/Converter'
import { Header } from './components/Header'
import { Saved } from './components/Saved'

function App () {
  return (
    <>
      <Header />
      <Converter />
      <Saved />
    </>
  )
}

export default App
