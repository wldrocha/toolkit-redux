import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemons: [],
    page: 0,
    isLoading: false
  },
  reducers: {
    startLoadingpokemons: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.isLoading = false
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    }
  }
})

export const { startLoadingpokemons, setPokemons } = pokemonSlice.actions
