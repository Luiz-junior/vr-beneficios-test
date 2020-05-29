import styled from 'styled-components'

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
export const PaginationContent = styled.div`
  
`

export const PrevBtn = styled.button`
  background: transparent;
  height: 40px;
  width: 50px;
  border: none;
  color: #333;
  outline: none;
  transition: ease-in 0.2s;

  &:active {
    background-color: #ddd;
    color: white;
  }
`

export const NextBtn = styled(PrevBtn)``