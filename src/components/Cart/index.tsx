import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'

import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart}>
        <h2>Clique em qualquer lugar para fechar</h2>
      </S.Overlay>
      <S.Aside>
        <ul>
          {items.map((item) => (
            <S.Item key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div className="container-items">
                <h3>{item.name}</h3>
                <div>
                  <Tag>{item.details.category}</Tag>
                  <Tag>{item.details.system}</Tag>
                </div>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
                title="Remover"
              />
            </S.Item>
          ))}
        </ul>
        {items.length === 0 || items.length > 1 ? (
          <S.Quantity>{items.length} jogos no carrinho</S.Quantity>
        ) : (
          <S.Quantity>{items.length} jogo no carrinho</S.Quantity>
        )}
        <S.Prices>
          Total de {parseToBrl(getTotalPrice(items))}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          to="/checkout"
          title="Clique aqui para continuar com a compra"
          type="button"
          $variant="primary"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </S.Aside>
    </S.CartContainer>
  )
}

export default Cart
