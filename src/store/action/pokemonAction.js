import axios from 'axios'

import api from '../../services/api';
import { GET_POKEMON, GET_POKEMON_BY_PARAM, GET_POKEMON_DETAILS, SET_OFFSET, ERROR } from './types'

export const getPokemon = (offset, param) => {
  return async dispatch => {
    let res = [];

    if (!param)
      res = await api.get(`/pokemon?limit=8&offset=${offset}`)
    else
      res = await api.get(`/pokemon/${param}?`)

    // // https://pokeapi.co/api/v2/ability/solar-power

    try {
      if (!param) {
        dispatch({
          type: GET_POKEMON,
          pokemon: res.data.results,
          loading: false
        })
      } else {
        dispatch({
          type: GET_POKEMON_BY_PARAM,
          pokemon: res.data,
          loading: false
        })
      }
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: res.data, loading: false })
    }
  }
}

/* export const getPokemonByParams = (param) => {
  return async dispatch => {
    const res = await api.get(`/pokemon/${param}?`)
    
    console.log('REST', res.data.results)
    try {
      if (param) {
        dispatch({
          type: GET_POKEMON_BY_PARAM,
          pokeSelected: res.data,
          loading: false
        })
      } else {
        dispatch({
          type: GET_POKEMON_BY_PARAM,
          pokeSelected: [],
          pokemon: res.data.results,
          loading: false
        })
      }

    } catch (error) {
      dispatch({ type: ERROR, errorStatus: error, loading: false })
    }
  }
}
 */
export const getPokemonDetails = (urlPokemon, { pokeDetails, idImage }, id) => {
  return async dispatch => {
    let res = []
    if (!id)
      res = await axios.get(urlPokemon);
    else
      res = await api.get(`/pokemon/${id}`)

    pokeDetails.push(res.data);
    idImage.push(res.data.id);

    try {
      dispatch({ type: GET_POKEMON_DETAILS, pokemonDetails: pokeDetails, pokeImageId: idImage, loading: false })
    } catch (error) {
      dispatch({ type: ERROR, errorStatus: res.data, loading: false })
    }
  }
}

export const setOffset = (offset) => {
  return dispatch => {
    dispatch({ type: SET_OFFSET, offset })
  }
}