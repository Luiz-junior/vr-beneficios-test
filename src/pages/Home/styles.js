import styled from 'styled-components'

export const ListContainer = styled.div`
  &&::after {
      content: "";
      height: 100vh;
      width: 100vw; 
      background: rgba(0, 0, 0, 0.4);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: ${props => props.display};
    }
`

export const SectionListPokemon = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  padding: 20px 0px;
`
export const SectionSearch = styled.section`
  padding: 20px 20px;
  
  @media (min-width: 1030px) {
    width: 86vw;
    margin: 0 auto;
    padding: 20px 0;
  }
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
`

export const SearchBtn = styled.input`
  border: none;
  border-radius: 5px;
  background: #8BBE8A;
  color: #fff;
  margin-left: 5px;
`

export const InputSearchPokemon = styled.input`
  background: #F2F2F2;
  border-radius: 5px;
  padding-left: 10px;
  border: none;
  outline: none;
  font-family: 'SF Pro Display';
  font-size: 14px;
  line-height: 19px;
  color: #747476;
  height: 40px;
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
  }
`

export const Loading = styled.h4`
  color: #aaa;
  text-align: center;
`