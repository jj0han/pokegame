import { useEffect, useState } from 'react'
import Painel from '../Layouts/Painel'
import { player, comp } from '../Pokemon/Pokemon'

export default function Game({ setStart, restart }) {
    //Count the rounds
    const [count, setCount] = useState(0)
    const [feed, setFeed] = useState(`A wild ${comp.pokemons[0]._info.name} apears! What will you do?`)

    //Random bonus damage
    const rng = () => {
        return Math.random() + 1
    }

    function playerAttack(skill) {
        if (count % 2 === 0) {
            const bonusDmg = rng()

            let dmg = comp.pokemons[0]._info.hp + (player.pokemons[0]._info.sk[skill].use() * bonusDmg)

            if (bonusDmg >= 1.8) {
                setFeed(`Critical Damage! ${player.pokemons[0]._info.name} used ${player.pokemons[0]._info.sk[skill].name} and did ${(comp.pokemons[0]._info.hp - dmg).toFixed(1)} damage!`)
            } else {
                setFeed(`${player.pokemons[0]._info.name} used ${player.pokemons[0]._info.sk[skill].name} and did ${(comp.pokemons[0]._info.hp - dmg).toFixed(1)} damage.`)
            }
            comp.pokemons[0]._info.hp = dmg

            setCount(count + 1)
        }
    }

    function compAttack() {
        if (count % 2 !== 0) {
            const bonusDmg = rng()
            const skill = Math.floor(Math.random() * 3)
            let dmg = player.pokemons[0]._info.hp + (comp.pokemons[0]._info.sk[skill].use() * bonusDmg)

            if (bonusDmg >= 1.8) {
                setFeed(`Critical Damage! Wild ${comp.pokemons[0]._info.name} used ${comp.pokemons[0]._info.sk[skill].name} and did ${(player.pokemons[0]._info.hp - dmg).toFixed(1)} damage!`)
            } else {
                setFeed(`Wild ${comp.pokemons[0]._info.name} used ${comp.pokemons[0]._info.sk[skill].name} and did ${(player.pokemons[0]._info.hp - dmg).toFixed(1)} damage.`)
            }
            player.pokemons[0]._info.hp = dmg
            setCount(count + 1)
        }
    }

    //Set the winner
    let result = ""
    if (player.pokemons[0]._info.hp <= 0) {
        result = false
    } else if (comp.pokemons[0]._info.hp <= 0) {
        result = true
    }

    setTimeout(() => {
        if(result === ""){
            compAttack()
        }
    }, 1500)

    useEffect(() => {
        let i = 0
        function typeWriter() {
            if (0 < feed.length) {
                document.querySelector(".Feed").innerHTML += feed.charAt(i)
                i++
                setTimeout(typeWriter, 15)
            }
        }
        document.querySelector(".Feed").innerHTML = ""
        typeWriter()
    }, [feed])


    function restart() {
        player.pokemons = []
        comp.pokemons = []
        comp.addNewPokemon()

        setStart(false)
    }

    function showResult(result) {
        if (result === true) {
            return <Painel restart={restart} result={"You won!"}/>
        } else if (result === false) {
            return <Painel restart={restart} result={"You lose!"}/>
        }
    }

    console.log(player)
    console.log(comp)
    console.log(count)

    var playerPokemonInfo = player.pokemons[0]._info
    var compPokemonInfo = comp.pokemons[0]._info

    return (
        <>
            {showResult(result)}
            <div className='Display'>
                <div className="info Comp-info">
                    <div className="CurrentPokemon">
                        <p>{compPokemonInfo.name}</p>
                        <p>HP: {compPokemonInfo.hp.toFixed(1)}</p>
                    </div>
                </div>
                <div className='Sprite-container'>
                    <img src={comp.pokemons[0]._info.frontSprite} alt="s" />
                </div>
                <div className='Sprite-container'>
                    <img src={player.pokemons[0]._info.backSprite} alt="s" />
                </div>
                <div className="info Player-info">
                    <div className='CurrentPokemon'>
                        <p>{playerPokemonInfo.name}</p>
                        <p>HP: {playerPokemonInfo.hp.toFixed(1)}</p>
                    </div>
                </div>
            </div>
            {result}
            <div className='Actions'>
                <div className='Feed'>

                </div>
                <div className='Skills'>
                    <button onClick={() => playerAttack(0)}>{player.pokemons[0]._info.sk[0].name}</button>
                    <button onClick={() => playerAttack(1)}>{player.pokemons[0]._info.sk[1].name}</button>
                    <button onClick={() => playerAttack(2)}>{player.pokemons[0]._info.sk[2].name}</button>
                    <button onClick={() => playerAttack(3)}>{player.pokemons[0]._info.sk[3].name}</button>
                </div>
            </div>

        </>
    )
}
