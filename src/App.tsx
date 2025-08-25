import { useLocation } from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyles } from './styles/styles'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  const location = useLocation()

  const isCategories = location.pathname === '/categories'

  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      {isCategories ? (
        <Footer background="black" />
      ) : (
        <Footer background="gray" />
      )}
    </>
  )
}

export default App
