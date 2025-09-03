import styled from 'styled-components'

import { breakpoints } from '../../styles/styles'

import colors from '../../styles/colors'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    margin: 16px 0 0 0;
  }
`

export const HeaderBar = styled.header`
  max-width: 1024px;
  width: 100%;
  margin-bottom: 80px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${colors.gray};

  a {
    text-decoration: none;
    color: ${colors.white};
    font-weight: bold;

    &:hover {
      color: ${colors.blue};
    }
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      align-items: center;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;
  transition: opacity 0.4s ease-in-out;

  &.is-open {
    display: block;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 0;
    span b {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 24px;
  cursor: pointer;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
