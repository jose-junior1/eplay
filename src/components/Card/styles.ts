import styled from 'styled-components'

import colors from '../../styles/colors'

export const Container = styled.div`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 40px;

  h2,
  h3 {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
