import { useState } from 'react'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'
import * as S from './styles'
import Section from '../Section'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') {
      return zoom
    }
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.GalleryList>
          {items.map((media, index) => (
            <S.GalleryItem
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.GalleryItem>
          ))}
        </S.GalleryList>
      </Section>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.Container className="container">
          <header>
            <h4>{name}</h4>
            <img onClick={closeModal} src={close} alt="Ícone de fechar" />
          </header>
          {modal.type === 'image' ? (
            <img className="game-image" src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </S.Container>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
