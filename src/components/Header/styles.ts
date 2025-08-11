import styled from 'styled-components'

import Cores from '../../Styles/colors'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
  margin-bottom: 80px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${Cores.cinza};

  a {
    text-decoration: none;
    color: ${Cores.branco};
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
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
    transform: scale(1.1);
  }
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
`
