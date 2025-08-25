import styled from 'styled-components'
import cores from '../../styles/colors'

type Props = {
  background: 'black' | 'gray'
}

export const Container = styled.div<Props>`
  background-color: ${(props) =>
    props.background === 'gray' ? `${cores.cinza}` : `${cores.preto}`};
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
  color: ${cores.cinzaClaro};
  text-decoration: none;

  &:hover {
    color: ${cores.branco};
  }
`
