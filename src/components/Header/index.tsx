import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import cart from '../../assets/images/icons/carrinho.svg'
import logo from '../../assets/images/logo/logo.svg'

import * as S from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={openMenu}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/" title="Clique aqui para voltar à página inicial">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  to="/categories"
                  title="Clique aqui para acessar a página de categorias"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  to="/#coming-soon"
                  title="Clique aqui para ver as novidades"
                >
                  Novidades
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  to="/#on-sale"
                  title="Clique aqui para ver as promoções"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart} title="Ver itens no carrinho">
          {items.length === 0 || items.length > 1 ? (
            <span>
              {items.length} <b>- produtos</b>
            </span>
          ) : (
            <span>
              {items.length} <b>- produto</b>
            </span>
          )}
          <img src={cart} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              to="/categories"
              title="Clique aqui para acessar a página de categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              to="/#coming-soon"
              title="Clique aqui para ver as novidades"
              onClick={() => setIsMenuOpen(false)}
            >
              Novidades
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              to="/#on-sale"
              title="Clique aqui para ver as promoções"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
