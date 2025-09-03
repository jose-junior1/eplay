import styled from 'styled-components'

import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  position: relative;
  display: block;
  height: 560px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Title = styled.h2`
  max-width: 449px;
  width: 100%;
  font-size: 36px;
`

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
