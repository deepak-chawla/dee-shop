import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'
import HomePage from './screen/HomePage'
import ProductPage from './screen/ProductPage'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/product/:productId' element={<ProductPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
