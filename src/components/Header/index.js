import React from 'react'

import logo from '../../assets/img/logo.png'

import { HeaderContainer, SectionHeader, Logo } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <SectionHeader>
        <Logo src={logo} alt="Imagem do logo" />
      </SectionHeader>
    </HeaderContainer>
  )
}

export default Header
