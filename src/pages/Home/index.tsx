import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSale } = useGetOnSaleQuery()
  const { data: onSoon } = useGetSoonQuery()

  if (onSale && onSoon) {
    return (
      <>
        <Banner />
        <ProductsList
          id="on-sale"
          games={onSale}
          title="Promoções"
          $background="gray"
        />
        <ProductsList
          id="coming-soon"
          games={onSoon}
          title="Em breve"
          $background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
