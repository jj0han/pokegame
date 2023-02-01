import { Skills } from "./Skills"

class Pokemon {
    constructor(info = { name: "", hp: undefined, sk: undefined, type: "" }) {
        this.info = info
    }

    get info() {
        return this._info
    }

    set info(newInfo) {
        this._info = newInfo
    }

}


class Pikachu extends Pokemon {
    info = {
        name: "Pikachu",
        hp: 100,
        sk: [new Skills().thunderShock, new Skills().ironTail, new Skills().quickAttack, new Skills().feint],
        type: "eletric",
        frontSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        backSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    }
}

class Charmander extends Pokemon {
    info = {
        name: "Charmander",
        hp: 110,
        sk: [new Skills().tackle, new Skills().amber, new Skills().quickAttack, new Skills().scratch],
        type: "fire",
        frontSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        backSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    }
}

class Riolu extends Pokemon {
    info = {
        name: "Riolu",
        hp: 110,
        sk: [new Skills().auraSphere, new Skills().metalClaw, new Skills().quickAttack, new Skills().feint],
        type: "fighter",
        frontSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
        backSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/447.png",
    }
}


export { Pikachu, Charmander, Riolu }