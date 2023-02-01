import { player } from '../Pokemon/Pokemon'
import * as Pokedex from "../Pokemon/Pokedex"

export default function Menu({ setStart }) {

  
  function choosePokemon(choice) {
    player.pokemons = []
    switch (choice) {
      case 0:
          player.pokemons.push(new Pokedex.Pikachu())
          break
      case 1:
          player.pokemons.push(new Pokedex.Charmander())
          break
      case 2:
          player.pokemons.push(new Pokedex.Riolu())
          break
      default:
          break
  }
    setStart(true)
  }

  return (
    <div className="Menu">
      <img src="https://archives.bulbagarden.net/media/upload/thumb/2/26/Pokémon_Quest_logo.png/320px-Pokémon_Quest_logo.png" alt="" />
      <h1>Choose your Pokemon</h1>
      <div className='ChoosePokemon'>
        <button onClick={() => choosePokemon(0)}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="" />
          <p>Pikachu</p>
        </button>
        <button onClick={() => choosePokemon(1)}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" />
          <p>Charmander</p>
        </button>
        <button onClick={() => choosePokemon(2)}>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png" alt="" />
          <p>Riolu</p>
        </button>
      </div>
    </div>
  )
}