import styled from 'styled-components'
import cores from '../../styles/colors'

export const GalleryList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.73);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.5s ease;

  img {
    width: 40px;
    height: 40px;
  }
`

export const GalleryItem = styled.li`
  position: relative;

  > img {
    height: 150px;
    width: 150px;
    border: 2px solid ${cores.branco};
    border-radius: 8px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.visible {
    display: flex;
    opacity: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
    }

    img {
      display: block;
      max-width: 100%;
      cursor: pointer;
    }
  }

  .game-image,
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  iframe {
    width: 100%;
    height: 480px;
    border: none;
  }
`
