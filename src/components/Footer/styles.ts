import styled from 'styled-components'
import Cores from '../../styles/colors'

export const Container = styled.div`
  background-color: ${Cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const Title = styled.h4`
  font-size: 16px;
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`

export const Link = styled.a`
  color: ${Cores.cinzaClaro};
  text-decoration: none;

  &:hover {
    color: ${Cores.branco};
  }
`
