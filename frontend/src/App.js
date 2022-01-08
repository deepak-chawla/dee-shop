import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'
import CartPage from './screen/CartPage'
import HomePage from './screen/HomePage'
import LoginPage from './screen/LoginPage'
import RegisterPage from './screen/RegisterPage'
import ProductPage from './screen/ProductPage'
import ProfilePage from './screen/ProfilePage'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<ProfilePage />} />
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
