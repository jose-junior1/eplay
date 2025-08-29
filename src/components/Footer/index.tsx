import { Container, Title, Links, FooterSection, LinkItem } from './styles'

const currentYear = new Date().getFullYear()

type Props = {
  background: 'black' | 'gray'
}

const Footer = ({ background }: Props) => (
  <Container background={background}>
    <div className="container">
      <FooterSection>
        <Title>Categorias</Title>
        <Links>
          <li>
            <LinkItem to="/categories#action">Ação</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#sports">Esportes</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#fight">Luta</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#rpg">RPG</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#simulation">Simulação</LinkItem>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <Title>Acesso rápido</Title>
        <Links>
          <li>
            <LinkItem to="/#on-sale">Promoções</LinkItem>
          </li>
          <li>
            <LinkItem to="/#on-soon">Em breve</LinkItem>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
