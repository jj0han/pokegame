import { useState } from "react"
import './App.css'
import './Pokemon/Pokemon'
import Game from './Pages/Game'
import Menu from './Pages/Menu'

export default function App() {
  const [start, setStart] = useState(false)

  return (
    <div className="App">
      {start ? <Game setStart={setStart} /> : <Menu setStart={setStart} />}
    </div>
  )
}