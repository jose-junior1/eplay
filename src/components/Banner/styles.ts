import styled from 'styled-components'

import banner from '../../assets/images/banner-homem-aranha.png'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  display: block;
  height: 560px;
  width: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  max-width: 449px;
  width: 100%;
  font-size: 36px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
