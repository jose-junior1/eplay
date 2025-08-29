import styled from 'styled-components'

import cores from '../../styles/colors'
import { breakpoints } from '../../styles/styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
  margin-bottom: 80px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${cores.cinza};

  a {
    text-decoration: none;
    color: ${cores.branco};
    font-weight: bold;

    &:hover {
      color: ${cores.azul};
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  gap: 16px;
`

export const LinkItem = styled.li`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`
