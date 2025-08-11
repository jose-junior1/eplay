import { LinkCart, HeaderBar, LinkItem, Links } from './styles'

import logo from '../../assets/images/logo/logo.svg'
import carrinho from '../../assets/images/icons/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <img src={logo} alt="EPLAY" />
        <nav>
          <Links>
            <LinkItem>
              <a href="#categorias">Categorias</a>
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
      <LinkCart href="#">
        0 - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header
