import styled from 'styled-components'
import { Props } from '.'
import cores from '../../styles/colors'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? `${cores.preto}` : `${cores.cinza}`};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? `${cores.cinza}` : `${cores.preto}`};
  }

  p {
    max-width: 640px;
    width: 100%;
    font-size: 14px;
    line-height: 22px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 40px;
`
