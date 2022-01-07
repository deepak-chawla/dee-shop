import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'
import CartPage from './screen/CartPage'
import HomePage from './screen/HomePage'
import ProductPage from './screen/ProductPage'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:productId' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/cart/:productId' element={<CartPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
