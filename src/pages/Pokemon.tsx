import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type { PokemonDetails } from "../type/PokemonDetails";


function Pokemon(){
    const {id}= useParams();
    const [pokemon, setPokemon] = useState<PokemonDetails|null>(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data);
        })
    },[id]);
    if(pokemon)
    return <>
        <img src={`${pokemon.sprites.other?.["official-artwork"]?.front_default }`}/>
        <h1>{pokemon.name.toUpperCase()}</h1>
        <p>Height : {pokemon.height} decimetres</p>
        <p>Weight : {pokemon.weight} hectograms</p>
    </>
}

export default Pokemon