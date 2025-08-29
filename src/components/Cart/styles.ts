import styled from 'styled-components'
import cores from '../../styles/colors'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import remove from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${cores.preto};
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h2 {
    color: ${cores.branco};
    opacity: 1;
  }
`

export const CartContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 360px;
  opacity: 0;
  pointer-events: none;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

  &.is-open {
    transform: translateX(0%);
    opacity: 1;
    pointer-events: auto;
  }
`

export const Aside = styled.aside`
  z-index: 1;
  background-color: ${cores.cinza};
  padding: 40px 16px 0 16px;
  width: 360px;

  ${ButtonContainer} {
    margin-top: 24px;
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branco};

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 1em;
  color: ${cores.branco};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid ${cores.cinzaMedio};
  padding: 8px 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 1em;
    color: ${cores.branco};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    position: absolute;
    top: 8px;
    right: 0;
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    background-image: url(${remove});
  }
`
