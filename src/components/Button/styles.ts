import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Props } from '.'

import colors from '../../styles/colors'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid;
  color: ${colors.white};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      border-color: ${colors.green};
      background-color: ${colors.green};

      &:hover {
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      border-color: ${colors.white};
      background-color: transparent;
    `}

  &:hover {
    transform: scale(1.02);
  }
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  backface-visibility: hidden;

  &:hover {
    transform: translateZ(0) scale(1.05);
    border-color: ${colors.blue};
    color: ${colors.lightBlue};
  }
`
