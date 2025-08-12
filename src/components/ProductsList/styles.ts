import styled from 'styled-components'
import { Props } from '.'
import Cores from '../../styles/colors'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? `${Cores.preto}` : `${Cores.cinza}`};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? `${Cores.cinza}` : `${Cores.preto}`};
  }
`

export const Title = styled.h2`
  font-size: 18px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  width: 100%;
  margin-top: 40px;
`
