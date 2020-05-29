import styled from 'styled-components'

export const DialogInfoContainer = styled.div`
  height: 200px;
  border-radius: 30px 30px 0 0;
  position: fixed;
  bottom: 0;
  display: none;
  width: 100%;
  left: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  
  @media (min-width: 768px) {
    left: 25%;
    top: 40%;
    width: 50%;
    border-radius: 20px;
  }

  .text-message {
    color: #444;
    font-size: 30px;
    font-weight: 700px;
  }
`

export const CloseDialog = styled.section`
  position: relative;

  .close-dialog {
    height: 5px;
    width: 55px;
    border-radius: 5px;
    position: fixed;
    bottom: 203px;
    background: #fff;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;

    @media (min-width: 768px) {
    display: none;
    }
  }
`
export const IconClose = styled.img`
  width: 25px;
  position: absolute;
  display: none;
  top: 3%;

  @media (min-width: 768px) {
    display: block;
    left: 93%;
    
  }

  @media (min-width: 1024px) {
    left: 95%;
  }
`

export const DialogDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const BaseStatsText = styled.strong`
  color: #62B957;
  padding-bottom: 10px;
`

export const IncreaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75vw;
  padding: 5px 0;
  color: #333;

  @media (min-width: 768px) {
    width: 40vw;
  }
`

export const TotalIncreaseText = styled.span`
  color: #555;
  padding-left: 15px;
  text-align: right;
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ccc;
  border-radius: 5px;
`

export const PokeBar = styled.div`
  width: ${props => props.filled}%;
  height: 5px;
  background-color: #8BBE8A;
`

export const SectionAbilities = styled.div`
  display: flex;
  justify-content: space-between;
  color: #333;
`

export const AbilityName = styled.span`
  background: #8BBE8A;
  padding: 0 5px;
  border-radius: 5px;
  color: #fff;
  margin: 0 5px;
`
