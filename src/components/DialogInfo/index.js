import React, { useState, useEffect } from 'react'

import {
  DialogInfoContainer,
  CloseDialog,
  IncreaseContainer,
  DialogDetails,
  ProgressBar,
  PokeBar,
  BaseStatsText,
  TotalIncreaseText,
  SectionAbilities,
  AbilityName
} from './styles'

function DialogInfo({ pokeDetails, transition, maxHeight, opacity, onCloseDialog }) {

  let [pokeStats, setPokeStats] = useState([])

  useEffect(() => {
    if (pokeDetails.length > 0) {
      setPokeStats([])

      pokeDetails[0].stats.map(s => {
        let { name } = s.stat

        if (name === 'hp' || name === 'attack' || name === 'defense' || name === 'speed')
          setPokeStats(oldState => [...oldState, { name: name, stat: s.base_stat }])
      })
    }
  }, [pokeDetails])

  if (pokeDetails.length < 1) return ''

  return (
    <DialogInfoContainer style={{ transition, maxHeight }}>
      <CloseDialog onClick={() => onCloseDialog()}>
        <span className="close-dialog" style={{ transition: 'opacity .2s ease-in-out', opacity }}></span>
      </CloseDialog>

      {pokeStats.length > 0 && (
        <DialogDetails>
          <BaseStatsText>Base Stats</BaseStatsText>
          {pokeStats.map((pk, i) => {
            return (
              <IncreaseContainer key={i} >
                <strong> {pk.name}: </strong>
                <TotalIncreaseText>{pk.stat}</TotalIncreaseText>
                <div style={{ width: '30%' }}>
                  <ProgressBar>
                    <PokeBar filled={pk.stat} />
                  </ProgressBar>
                </div>
              </IncreaseContainer>
            )
          })}

          <SectionAbilities>
            <strong>Abilities: </strong>
            <div>
              {pokeDetails[0].abilities.map((a, i) => <AbilityName key={i}>{a.ability.name}</AbilityName>)}
            </div>
          </SectionAbilities>
        </DialogDetails>
      )}
    </DialogInfoContainer>
  )
}

export default DialogInfo
