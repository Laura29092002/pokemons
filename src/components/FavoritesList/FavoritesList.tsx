import type { PokemonDetails } from "../../type/PokemonDetails";


function FavoriteList({pokemons} : {pokemons : PokemonDetails[]}){
    return (<>
        <ul>
            {pokemons.map((p) => (
                <li key={p.id}>{p.name}</li>
            ))}
        </ul>
    </>)
}

export default FavoriteList