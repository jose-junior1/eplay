import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import * as S from './styles'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
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
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && `Por ${formataPreco(game.prices.current)}`}
          </p>
          {game.prices.current && (
            <ButtonContainer
              title="Clique para adicionar o jogo ao carrinho"
              type="button"
              variant="primary"
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
