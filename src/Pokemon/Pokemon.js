import * as Pokedex from "./Pokedex"

class Player {
    constructor() {
        this.pokemons = []
    }

    addNewPokemon() {
        let rnd = Math.floor(Math.random() * 3)

        switch (rnd) {
            case 0:
                this.pokemons.push(new Pokedex.Pikachu())
                break
            case 1:
                this.pokemons.push(new Pokedex.Charmander())
                break
            case 2:
                this.pokemons.push(new Pokedex.Riolu())
                break
            default:
                break
        }
    }

    get getPokemons() {
        return this._pokemons
    }

    set setPokemons(newPokemon) {
        this._pokemons = newPokemon
    }
}

//players set
const comp = new Player()
comp.addNewPokemon()

const player = new Player()
// player.addNewPokemon()

export { player, comp }