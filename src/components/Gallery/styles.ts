import styled from 'styled-components'

import colors from '../../styles/colors'

export const GalleryList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
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
  cursor: zoom-in;
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
    border: 2px solid ${colors.white};
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
      width: 16px;
      height: 16px;
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

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;

  &.visible {
    opacity: 1;
    transition: opacity 0.7s ease;
    pointer-events: auto;
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
