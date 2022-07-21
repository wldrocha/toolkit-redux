import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

export const PokemonApp = () => {
  const dispatch = useDispatch()

  const { pokemons, page, isLoading } = useSelector((state) => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {isLoading && <span>Loading...</span>}
      {!isLoading && (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon?.name}>{pokemon?.name}</li>
          ))}
        </ul>
      )}
      <br />
      <button
        onClick={() => dispatch(getPokemons(page))}
        disabled={isLoading ? true : false}
      >
        Next page
      </button>
    </>
  )
}
