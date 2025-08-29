import styled from 'styled-components'

import cores from '../../styles/colors'
import { breakpoints } from '../../styles/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 16px;

  &::after {
    position: absolute;
    content: '';
    background-color: ${cores.preto};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    .tags-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }
`

export const ContainerPreco = styled.div`
  max-width: 283px;
  width: 100%;
  padding: 16px;
  background-color: ${cores.preto};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    margin: 16px 0;
    font-size: 18px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
// export const BtnAddCart = styled.button`
//   background-color: ${cores.verde};
//   color: ${cores.branco};
//   padding: 8px 16px;
//   border-radius: 8px;
//   font-size: 1em;
//   cursor: pointer;
// `
