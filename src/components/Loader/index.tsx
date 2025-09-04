import { PacmanLoader } from 'react-spinners'

import colors from '../../styles/colors'

import * as S from './styles'

const Loader = () => {
  return (
    <S.Container>
      <PacmanLoader
        color={colors.white}
        size={25}
        loading={true}
        speedMultiplier={1}
      />
    </S.Container>
  )
}

export default Loader
