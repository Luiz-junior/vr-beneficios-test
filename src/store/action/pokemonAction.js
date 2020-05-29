import axios from 'axios'

import api from '../../services/api';
import { GET_POKEMON, GET_POKEMON_BY_PARAM, GET_POKEMON_DETAILS, SET_OFFSET, ERROR } from './types'

export const getPokemon = (offset, param) => {
  return dispatch => {

    if (!param) {
      api.get(`/pokemon?limit=8&offset=${offset}`)
        .then(res => {
          dispatch({
            type: GET_POKEMON,
            pokemon: res.data.results,
            loading: false,
            errorStatus: ''
          })
        })
        .catch(err => dispatch({ type: ERROR, errorStatus: err, loading: false }))
    } else {
      api.get(`/pokemon/${param}?`)
        .then(res => {
          dispatch({
            type: GET_POKEMON_BY_PARAM,
            pokemon: res.data,
            loading: false,
            errorStatus: ''
          })
        })
        .catch(err => {
          /* OBS: Como a API retorna um erro 404 ao invés de retornar algo informando que não há resultados
          que daí poderia fazer um outro request dentro do .then(), então tive que efetuar esse outro request
          no catch para verificar se o que foi informado é alguma habilidade, caso não for aí sim da um dispatch com o erro. 
          */
          axios.get(`https://pokeapi.co/api/v2/ability/${param}`)
            .then(res => {
              dispatch({
                type: GET_POKEMON_BY_PARAM,
                pokemon: res.data,
                loading: false,
                errorStatus: ''
              })
            })
            .catch(err => dispatch({ type: ERROR, errorStatus: err, loading: false }))
        })
    }
  }
}

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