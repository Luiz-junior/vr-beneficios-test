import React from 'react'
import { useSelector } from 'react-redux'

import {
  PokeCardContainer,
  PokeCardInfo,
  CardInfoDetails,
  PokeId,
  PokeName,
  Types,
  TypeName,
  CardContent,
  PokeballBack,
  ImgPoke,
} from './styles'
import pokeballImg from '../../assets/img/Pokeball.svg'

function PokeCard({ poke, pokeId, onOpenDialog, index, details }) {

  const { loading } = useSelector(state => ({
    loading: state.pokemonReducer.loading,
  }));

  if (loading)
    return 'Carregando...';

  return (
    <PokeCardContainer
      key={index}
      id={`poke-card-${index}`}
      onClick={() => onOpenDialog(pokeId)}
    >
      <PokeCardInfo>
        <CardInfoDetails>
          <PokeId>#00{pokeId}</PokeId>
          <PokeName>{poke.name}</PokeName>
          <Types>
            {details && details.types.map((t, i) => {
              return <TypeName key={i}>{t.type.name}</TypeName>
            })}
          </Types>
        </CardInfoDetails>
        <CardContent>
          <PokeballBack src={pokeballImg} alt="Pokeball" />
          <ImgPoke
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
            alt="Imagem do Pokemon"
          />
        </CardContent>
      </PokeCardInfo>
    </PokeCardContainer>
  )
}

export default PokeCard;