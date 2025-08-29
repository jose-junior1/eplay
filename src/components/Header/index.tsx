import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { CartButton, HeaderBar, LinkItem, Links } from './styles'

import logo from '../../assets/images/logo/logo.svg'
import carrinho from '../../assets/images/icons/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/" title="Home">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#novidades">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#promocoes">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length === 0 || items.length > 1
          ? `${items.length} - produtos`
          : `${items.length} - produto`}
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
