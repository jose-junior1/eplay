import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

import colors from '../../styles/colors'

type Props = {
  $background: 'black' | 'gray'
}

export const Container = styled.div<Props>`
  background-color: ${(props) =>
    props.$background === 'gray' ? `${colors.gray}` : `${colors.black}`};
  margin-top: 40px;
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
  flex-wrap: wrap;
`

export const LinkItem = styled(HashLink)`
  color: ${colors.lightGray};
  text-decoration: none;

  &:hover {
    color: ${colors.white};
  }
`
