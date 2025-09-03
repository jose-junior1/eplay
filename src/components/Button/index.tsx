import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  $variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  $variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        $variant={$variant}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  if (type === 'submit') {
    return (
      <S.ButtonContainer
        type="submit"
        title={title}
        onClick={onClick}
        $variant={$variant}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title} onClick={onClick}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
