import styled from 'styled-components'

import { breakpoints } from '../../styles/styles'
import { ButtonContainer } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

import remove from '../../assets/images/fechar.png'

import colors from '../../styles/colors'

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  h2 {
    color: ${colors.white};
    opacity: 1;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 18px;
      text-align: center;
      padding: 0 10px;
      line-height: 32px;
    }
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

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 70%;
  }
`

export const Aside = styled.aside`
  z-index: 1;
  background-color: ${colors.gray};
  padding: 40px 16px 0 16px;

  ${ButtonContainer} {
    margin-top: 24px;
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 8px;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGray};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 1em;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid ${colors.mediumGray};
  padding: 8px 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 1em;
    color: ${colors.white};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  span {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};
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

  @media (max-width: ${breakpoints.tablet}) {
    gap: 8px;
    max-width: 100%;

    .container-items {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      div {
        display: flex;
        ${TagContainer} {
          padding: 2px 4px;
        }
      }
    }

    h3 {
      font-size: 14px;
      margin: 0;
    }

    span {
      font-size: 12px;
    }
  }
`
