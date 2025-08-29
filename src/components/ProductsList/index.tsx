import { Game } from '../../pages/Home'
import Product from '../Product'

import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getGameTags = (game: Game) => {
  const tags = []

  if (game.release_date) {
    tags.push(game.release_date)
  }

  if (game.prices.discount) {
    tags.push(`${game.prices.discount}%`)
  }

  if (game.prices.current) {
    tags.push(formataPreco(game.prices.current))
  }

  return tags
}

const ProductsList = ({ title, background, games, id }: Props) => {
  return (
    <Container id={id} background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                title={game.name}
                category={game.details.category}
                system={game.details.system}
                image={game.media.thumbnail}
                description={game.description}
                infos={getGameTags(game)}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
