import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemon, getPokemonDetails } from '../../store/action/pokemonAction';
import PokeCard from '../../components/PokeCard';
import DialogInfo from '../../components/DialogInfo';
import Pagination from '../../components/Pagination';
import {
  ListContainer,
  SectionSearch,
  SectionListPokemon,
  InputSearchPokemon,
  Loading,
  Form,
  SearchBtn,
  ErrorMessage,
} from './styles'

function Home() {
  const dispatch = useDispatch();

  const [maxHeight, setMaxHeight] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [display, setDisplay] = useState('none')
  const [inputPoke, setInputPoke] = useState('')
  const [pokeId, setPokeId] = useState(0)
  const [textBtnSeach, SetTextBtnSeach] = useState('Buscar')

  const { pokemon, pokeSelected, pokeDetails, pokeImageId, offset, loading, errorStatus } = useSelector(state => ({
    pokemon: state.pokemonReducer.pokemon,
    pokeSelected: state.pokemonReducer.pokeSelected,
    pokeDetails: state.pokemonReducer.pokemonDetails,
    pokeImageId: state.pokemonReducer.pokeImageId,
    offset: state.pokemonReducer.offset,
    loading: state.pokemonReducer.loading,
    errorStatus: state.pokemonReducer.errorStatus
  }));

  useEffect(() => {
    dispatch(getPokemon(offset));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, offset]);

  useEffect(() => { pokeImageId.sort((a, b) => a - b) });

  useEffect(() => {
    if (pokemon.length > 0) {
      let pokeDetailsIdImg = { pokeDetails: [], idImage: [] }

      if (pokemon.length > 1) {
        pokemon.map(poke => { dispatch(getPokemonDetails(poke.url, pokeDetailsIdImg)) })
      } else {
        pokemon.map(poke => { dispatch(getPokemonDetails(poke.url, pokeDetailsIdImg, poke.id)) })
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

  const onChangeInput = param => { setInputPoke(param) }

  const onSearchPoke = (event) => {
    event.preventDefault()
    SetTextBtnSeach('...')
    dispatch(getPokemon(offset, inputPoke))

    setTimeout(() => {
      SetTextBtnSeach('Buscar')
    }, 200);
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
          <SearchBtn type="submit" value={textBtnSeach} />
        </Form>
      </SectionSearch>

      <SectionListPokemon>
        {errorStatus !== ''
          ? <ErrorMessage>Nenhum pokemon encontrado :(</ErrorMessage>
          : pokemon.map((poke, i) => {
            return (
              <PokeCard
                key={i}
                poke={poke}
                pokeId={pokeImageId[i]}
                details={pokeDetails[i]}
                index={i}
                onOpenDialog={onOpenDialog}
              />
            )
          })
        }
      </SectionListPokemon>
      <Pagination />
      <DialogInfo
        pokeDetails={pokeDetails.filter(poke => poke.id === pokeId)}
        transition='max-height .2s ease-in-out'
        maxHeight={maxHeight}
        opacity={opacity}
        onCloseDialog={onCloseDialog}
      />
    </ListContainer>
  );
}

export default Home;

