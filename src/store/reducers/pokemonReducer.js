import { GET_POKEMON, GET_POKEMON_BY_PARAM, GET_POKEMON_DETAILS, SET_OFFSET, ERROR } from '../action/types'

const initialState = {
  pokemon: [],
  pokeSelected: [],
  pokemonDetails: [],
  detailsInfo: [],
  pokeImageId: [],
  offset: 0,
  loading: true,
  errorStatus: ''
}

export function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, pokemon: action.pokemon, loading: false }
    case GET_POKEMON_BY_PARAM:
      return { ...state, pokemon: [action.pokemon], loading: false }
    case GET_POKEMON_DETAILS:
      return { ...state, pokemonDetails: action.pokemonDetails, pokeImageId: action.pokeImageId, loading: false }
    case SET_OFFSET:
      return { ...state, offset: action.offset }
    case ERROR:
      return { ...state, errorStatus: action.errorStatus }
    default:
      return state
  }
}