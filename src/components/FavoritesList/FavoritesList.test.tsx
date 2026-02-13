import { describe, it, expect} from 'vitest'
import { render, screen } from '@testing-library/react'
import FavoriteList from './FavoritesList'
import type { PokemonDetails } from '../../type/PokemonDetails'


describe('FavoritesList', () => {
    it('Si pas de pokemon', () => {
        render(<FavoriteList pokemons={[]}/>)
        const liste = screen.getByRole('list');
        expect(liste).toBeInTheDocument();
        expect(liste.children).toHaveLength(0);
    });

    it('Si il y a une liste de pokemon', () => {
        const listOfPokemon : PokemonDetails[] = [
            {id: 0, name: "Pikachu", height : 20, weight: 75, sprites: "test"},
            {id: 1, name: "Salameche", height : 20, weight: 75, sprites: "test"},
        ];
        render(<FavoriteList pokemons={listOfPokemon} />);
        expect(screen.getByText("Pikachu")).toBeInTheDocument();
        expect(screen.getByText("Salameche")).toBeInTheDocument();
    })
})