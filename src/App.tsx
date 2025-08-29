import { useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import { GlobalStyles } from './styles/styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <Provider store={store}>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      {isHome ? <Footer background="gray" /> : <Footer background="black" />}
      <Cart />
    </Provider>
  )
}

export default App
