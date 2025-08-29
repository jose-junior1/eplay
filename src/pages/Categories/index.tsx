import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          id="action"
          games={actionGames}
          title="Ação"
          background="gray"
        />
        <ProductsList
          id="sports"
          games={sportGames}
          title="Esportes"
          background="black"
        />
        <ProductsList
          id="fight"
          games={fightGames}
          title="Luta"
          background="gray"
        />
        <ProductsList
          id="rpg
        "
          games={rpgGames}
          title="RPG"
          background="black"
        />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
