import styled from 'styled-components'
import Cores from '../../styles/colors'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${Cores.cinza};
  padding: 8px;
  border-radius: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 222px;
    height: 250px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  display: block;
  margin: 16px 0 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  text-align: justify;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
