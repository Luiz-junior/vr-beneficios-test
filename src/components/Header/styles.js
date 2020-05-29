import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: #eee;
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  padding-right: 5px;

  @media (min-width: 1030px) {
    margin: 0 auto;
    padding-right: 0;
    justify-content: flex-start;
    width: 88vw;
  }
`

export const Logo = styled.img`
  height: 50px;
  padding: 8px;
`