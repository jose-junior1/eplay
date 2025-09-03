import * as S from './styles'

const currentYear = new Date().getFullYear()

type Props = {
  $background: 'black' | 'gray'
}

const Footer = ({ $background }: Props) => (
  <S.Container $background={$background}>
    <div className="container">
      <S.FooterSection>
        <S.Title>Categorias</S.Title>
        <S.Links>
          <li>
            <S.LinkItem
              to="/categories#action"
              title="Clique aqui para acessar jogos de Ação"
            >
              Ação
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              to="/categories#sports"
              title="Clique aqui para acessar jogos de Esportes"
            >
              Esportes
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              to="/categories#fight"
              title="Clique aqui para acessar jogos de Luta"
            >
              Luta
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              to="/categories#rpg"
              title="Clique aqui para acessar jogos de RPG"
            >
              RPG
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              to="/categories#simulation"
              title="Clique aqui para acessar jogos de Simulação"
            >
              Simulação
            </S.LinkItem>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.Title>Acesso rápido</S.Title>
        <S.Links>
          <li>
            <S.LinkItem
              to="/#on-sale"
              title="Clique aqui para acessar a seção de promoções"
            >
              Promoções
            </S.LinkItem>
          </li>
          <li>
            <S.LinkItem
              to="/#coming-soon"
              title="Clique aqui para acessar a seção de em breve"
            >
              Em breve
            </S.LinkItem>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
