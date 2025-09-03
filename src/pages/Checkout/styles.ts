import styled, { css } from 'styled-components'

import colors from '../../styles/colors'

type InputGroupProps = {
  $maxWidth?: string
}

type RowProps = {
  $marginTop?: string
}

type TabButtonProps = {
  $isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  width: 100%;

  margin-top: ${(props) => props.$marginTop || '0'};
`

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: auto;
  max-width: ${(props) => props.$maxWidth || 'auto'};

  label {
    font-size: 14px;
  }

  input,
  select {
    height: 32px;
    padding: 0 8px;
    border: 1px solid transparent;
    background-color: ${colors.white};
    width: 100%;
    outline: none;
  }
`

export const SelectPaymentMethod = styled.div`
  display: flex;
  gap: 16px;
`

export const TabButton = styled.button<TabButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: ${colors.white};

  ${(props) =>
    props.$isActive === false &&
    css`
      background-color: ${colors.black};
    `}

  ${(props) =>
    props.$isActive === true &&
    css`
      background-color: ${colors.green};
    `}

  img {
    width: 16px;
    height: 13px;
  }
`
