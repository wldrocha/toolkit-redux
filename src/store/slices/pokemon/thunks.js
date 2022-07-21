import { pokemonApi } from '../../../api/pokemonApi'
import { setPokemons, startLoadingpokemons } from './'

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingpokemons())
    // const responseFetch = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // )
    // const data = await responseFetch.json()

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    )

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
  }
}
