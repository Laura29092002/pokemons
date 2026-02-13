import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Home from "./Home";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "../../store/slices";
import { Provider } from "react-redux";
import type { PokemonType } from "../../type/PokemonType";
import { MemoryRouter } from "react-router-dom";


describe('Home', () => {
    const store = configureStore({
            reducer: {
                favorites: favoritesSlice.reducer
            }
        })
    beforeEach(() =>{
        const mockFetch = vi.fn();
        vi.stubGlobal('fetch', mockFetch);
        const listOfPokemon : PokemonType[] = [
            {id: 0, name: "Pikachu", url:"https://pokeapi.co/api/v2/pokemon/0"},
            {id: 1, name: "Salameche", url:"https://pokeapi.co/api/v2/pokemon/1"},
        ];
        mockFetch.mockResolvedValueOnce({
            json: async () => ({results: listOfPokemon})
        });
        
        render(<MemoryRouter><Provider store={store}><Home/></Provider></MemoryRouter>)

    });
    it('Display Title On Home Page', () => {
        const title = screen.getByText('Pokemons');
        expect(title).toBeInTheDocument();
    });
    it('Display Search Bar With Right PlaceHolder', () => {
        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute('placeholder','Rechercher...');
    });
    it("Charge et affiche les pokemons depuis l'API", async () => {
        await waitFor(() => {
            expect(screen.getByText('Pikachu')).toBeInTheDocument();
            expect(screen.getByText('Salameche')).toBeInTheDocument();
        });
        expect(fetch).toBeCalledTimes(1);
        expect(fetch).toBeCalledWith('https://pokeapi.co/api/v2/pokemon');
    });

})