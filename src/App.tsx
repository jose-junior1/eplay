import { Provider } from 'react-redux'

import { store } from './store'

import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import Rotas from './routes'

import { GlobalStyles } from './styles/styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer $background="gray" />
      <Cart />
    </Provider>
  )
}

export default App
