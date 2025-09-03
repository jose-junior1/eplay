import styled from 'styled-components'

import { breakpoints } from '../../styles/styles'
import { Card } from '../Product/styles'
import { Props } from '.'

import colors from '../../styles/colors'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.$background === 'black' ? `${colors.black}` : `${colors.gray}`};

  ${Card} {
    background-color: ${(props) =>
      props.$background === 'black' ? `${colors.gray}` : `${colors.black}`};
  }
`

export const Title = styled.h2`
  font-size: 18px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
