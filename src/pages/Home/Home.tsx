import { useEffect, useState } from "react";
import type { PokemonType } from "../../type/PokemonType";
import { Link } from "react-router-dom";
import FavoriteList from "../../components/FavoritesList/FavoritesList";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";



function Home(){
    const [pokemons, setPokemons] = useState<PokemonType[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const favorites = useSelector((state: RootState) => state.favorites.pokemons)

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((data) => {
            const pokemons = data.results.map((p: PokemonType) => ({
                ...p,
                id : p.url.split('/').filter(Boolean).pop()
            }))
            setPokemons(pokemons)})
        .catch((err) => console.error("Error:", err));
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }
    const filtered = pokemons.filter((item: PokemonType) => item.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

    return (
    <>
        <h2>Pokemons</h2>
        <FavoriteList pokemons={favorites} />
        <input type="text" placeholder="Rechercher..." value={searchTerm} onChange={handleSearch}/>
        <ul>
            {filtered.map((p) => (
                <li key={p.id}><Link to={`/pokemon/${p.id}`}>{p.name}</Link></li>
            ))}
        </ul>
    </>);
}

export default Home