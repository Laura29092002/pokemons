import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type { PokemonDetails } from "../type/PokemonDetails";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/slices";


function Pokemon(){
    const {id}= useParams();
    const [pokemon, setPokemon] = useState<PokemonDetails|null>(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data);
        })
    },[id]);

    function add() {
        dispatch(addFavorite(pokemon))
    }


    if(pokemon)
    return <>
        <img src={`${pokemon.sprites.other?.["official-artwork"]?.front_default }`}/>
        <h1>{pokemon.name.toUpperCase()}</h1>
        <p>Height : {pokemon.height} decimetres</p>
        <p>Weight : {pokemon.weight} hectograms</p>
        <button onClick={add}>Add To Favorites</button>
    </>
}

export default Pokemon