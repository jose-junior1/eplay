import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

import ProductsList from '../../components/ProductsList'

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
          $background="black"
        />
        <ProductsList
          id="sports"
          games={sportGames}
          title="Esportes"
          $background="gray"
        />
        <ProductsList
          id="fight"
          games={fightGames}
          title="Luta"
          $background="black"
        />
        <ProductsList
          id="rpg
        "
          games={rpgGames}
          title="RPG"
          $background="gray"
        />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          $background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
