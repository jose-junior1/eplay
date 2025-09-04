import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

const Home = () => {
  const { data: onSale, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: onSoon, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        games={onSale}
        title="Promoções"
        $background="gray"
        isLoading={isLoadingSale}
      />
      <ProductsList
        id="coming-soon"
        games={onSoon}
        title="Em breve"
        $background="black"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
