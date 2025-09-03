import styled from 'styled-components'

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
