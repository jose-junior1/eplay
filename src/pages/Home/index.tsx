import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import residentEvil from '../../assets/images/resident.png'
import fifa23 from '../../assets/images/fifa-23.png'
import deathStranding from '../../assets/images/death-stranding.png'
import dyingLight from '../../assets/images/dying-light.png'

import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import streetFighter from '../../assets/images/street-fighter.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows/PS5/Xbox Series',
    image: residentEvil,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['R$ 199,90', '10%']
  },
  {
    id: 2,
    title: 'Fifa 23',
    category: 'Esporte',
    system: 'PS5',
    image: fifa23,
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['R$ 129,90', '50%']
  },
  {
    id: 3,
    title: 'Death Stranding',
    category: 'Aventura/Ação',
    system: 'PS5/XBOX SERIES',
    image: deathStranding,
    description:
      'Do lendário diretor Hideo Kojima, surge uma experiência que desafia gêneros, ainda maior em ...',
    infos: ['R$ 81,90', '50%']
  },
  {
    id: 4,
    title: 'Dying Light',
    category: 'Ação/RPG',
    system: 'Windows/PS5',
    image: dyingLight,
    description:
      'Sobreviva em uma cidade assolada por um vírus zumbi! Tome decisões importantes em sua missão ...',
    infos: ['R$ 59,90', '30%']
  }
]

const emBreve = [
  {
    id: 5,
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    image: diablo,
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['01/02']
  },
  {
    id: 6,
    title: 'Star Wars Jedi Survivor',
    category: 'Aventura',
    system: 'Ps5/Xbox Series',
    image: starWars,
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['09/05']
  },
  {
    id: 7,
    title: 'Street Fighter 6',
    category: 'Luta',
    system: 'Windows',
    image: streetFighter,
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    infos: ['05/04']
  },
  {
    id: 8,
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Nintendo Switch',
    image: zelda,
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda...™',
    infos: ['06/10']
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
