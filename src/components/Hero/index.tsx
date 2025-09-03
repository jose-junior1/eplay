import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import { Game } from '../../pages/Home'

import Tag from '../Tag'

import * as S from './styles'
import { ButtonContainer } from '../Button/styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div className="tags-container">
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.ContainerPreco>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && `Por ${parseToBrl(game.prices.current)}`}
          </p>
          {game.prices.current && (
            <ButtonContainer
              title="Clique para adicionar o jogo ao carrinho"
              type="button"
              $variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </ButtonContainer>
          )}
        </S.ContainerPreco>
      </div>
    </S.Banner>
  )
}

export default Hero
