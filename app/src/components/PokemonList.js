import React, {useEffect} from "react"
import {connect} from "react-redux"

import Pokemon from "./Pokemon"
import {fetchPokemon, nextPokemon} from "../actions/actions"

const PokemonList = (props) => {
    useEffect(() => {
        props.fetchPokemon()
    }, [])
    
    console.log(props.pokemon)

    let backArrow = "<"

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", width: 600, flexWrap: "wrap", margin: "0 auto"}}>
                {props.pokemon.map(pokemon => {
                    return <Pokemon pokemon={pokemon} url={pokemon.url}/>
                })}

                
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly", width: 300, margin: "0 auto"}}>
                <button onClick={() => props.nextPokemon(props.lastURL)}> {backArrow} </button>
                <button onClick={() => props.nextPokemon(props.nextURL)}> > </button>
            </div>
        </div>
        
    )
}

export default connect(state => state, {fetchPokemon, nextPokemon})(PokemonList)