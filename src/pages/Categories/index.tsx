import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsporte, setGamesEsporte] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fakeapi-cyan.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fakeapi-cyan.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsporte(res))

    fetch('https://fakeapi-cyan.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://fakeapi-cyan.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fakeapi-cyan.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="gray" />
      <ProductsList games={gamesEsporte} title="Esportes" background="black" />
      <ProductsList games={gamesLuta} title="Luta" background="gray" />
      <ProductsList games={gamesRpg} title="RPG" background="black" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="gray"
      />
    </>
  )
}

export default Categories
