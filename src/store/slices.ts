import { createSlice } from "@reduxjs/toolkit";
import type { PokemonDetails } from "../type/PokemonDetails";

interface FavoritesState {
    pokemons: PokemonDetails[] 
}

const favoritesInitialState : FavoritesState = {
    pokemons: []
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: favoritesInitialState,
    reducers: {
        addFavorite: (state, action) => {
            state.pokemons.push(action.payload);
        },
        deleteFavorite: (state, action) => {
            state.pokemons.filter((p) => p.id !== action.payload)
        }
    }
})

export const {addFavorite, deleteFavorite} = favoritesSlice.actions 
