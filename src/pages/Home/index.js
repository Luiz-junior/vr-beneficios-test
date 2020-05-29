import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemon, getPokemonByParams, getPokemonDetails } from '../../store/action/pokemonAction';
import PokeCard from '../../components/PokeCard';
import DialogInfo from '../../components/DialogInfo';
import Pagination from '../../components/Pagination';
import {
  ListContainer,
  SectionSearch,
  SectionListPokemon,
  Title,
  Description,
  InputSearchPokemon,
  Loading,
  Form,
  SearchBtn,
} from './styles'

function Home() {
  const dispatch = useDispatch();

  const [maxHeight, setMaxHeight] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [display, setDisplay] = useState('none')
  const [inputPoke, setInputPoke] = useState('')
  const [pokeId, setPokeId] = useState(0)

  const { pokemon, pokeSelected, pokeDetails, pokeImageId, offset, loading } = useSelector(state => ({
    pokemon: state.pokemonReducer.pokemon,
    pokeSelected: state.pokemonReducer.pokeSelected,
    pokeDetails: state.pokemonReducer.pokemonDetails,
    pokeImageId: state.pokemonReducer.pokeImageId,
    offset: state.pokemonReducer.offset,
    loading: state.pokemonReducer.loading,
  }));

  useEffect(() => {
    dispatch(getPokemon(offset));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, offset]);

  useEffect(() => { pokeImageId.sort((a, b) => a - b) });

  useEffect(() => {
    if (pokemon.length > 0) {
      let pokeDetails = [];
      let idImage = [];

      if (pokeSelected < 1) {
        pokemon.map(poke => { dispatch(getPokemonDetails(poke.url, idImage, pokeDetails)) })
      } else {
        pokeSelected.map(poke => {
          dispatch(getPokemonDetails(poke.forms[0].url, idImage, pokeDetails))
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon, pokeSelected]);

  const onOpenDialog = (pokeId) => {
    setMaxHeight(200)
    setOpacity(1)
    setDisplay('block')
    setPokeId(pokeId)
  }

  const onCloseDialog = () => {
    setMaxHeight(0)
    setOpacity(0)
    setDisplay('none')
  }
  /* const onSearchPoke = (pokeName) => {
    setInputPoke(pokeName)

    let poke = pokemon.filter(poke => poke.name == pokeName)
    setPokeSelect(poke)
  } */
  const onChangeInput = param => { setInputPoke(param) }

  const onSearchPoke = (event) => {
    event.preventDefault()
    dispatch(getPokemonByParams(inputPoke))
  }

  if (loading)
    return <Loading>Carregando...</Loading>;

  return (
    <ListContainer className="container" display={display}>
      <SectionSearch>
        <Form onSubmit={onSearchPoke}>
          <InputSearchPokemon
            type="text"
            placeholder="Informe o id, nome ou habilidade"
            className="searchPokemon"
            value={inputPoke}
            onChange={(e) => onChangeInput(e.target.value)}
          />
          <SearchBtn type="submit" value="Buscar" />
        </Form>
      </SectionSearch>

      <SectionListPokemon>
        {pokeSelected.length < 1
          ? pokemon.map((poke, i) => (
            <PokeCard
              key={i}
              poke={poke}
              pokeId={pokeImageId[i]}
              details={pokeDetails[i]}
              index={i}
              onOpenDialog={onOpenDialog}
            />
          ))
          : (
            <PokeCard
              poke={pokeSelected[0]}
              pokeId={pokeImageId[0]}
              details={pokeSelected[0]}
              onOpenDialog={onOpenDialog}
            />
          )
        }
      </SectionListPokemon>
      <Pagination />
      <DialogInfo
        pokeDetails={pokeSelected.length < 1
          ? pokeDetails.filter(poke => poke.id === pokeId)
          : pokeSelected.filter(poke => poke.id === pokeId)
        }
        transition='max-height .2s ease-in-out'
        maxHeight={maxHeight}
        opacity={opacity}
        onCloseDialog={onCloseDialog}
      />
    </ListContainer>
  );
}

export default Home;

