import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Cores from '../../Styles/colors'

export const ButtonContainer = styled.button`
  border: 2px solid ${Cores.branco};
  color: ${Cores.branco};
  background-color: transparent;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Cores.branco};
  color: ${Cores.branco};
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
  }
`
