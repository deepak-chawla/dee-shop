import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'
import CartPage from './screen/CartPage'
import Shipping from './screen/ShippingPage'
import HomePage from './screen/HomePage'
import LoginPage from './screen/LoginPage'
import RegisterPage from './screen/RegisterPage'
import ProductPage from './screen/ProductPage'
import ProfilePage from './screen/ProfilePage'
import PaymentPage from './screen/PaymentPage'
import PlaceOrderPage from './screen/PlaceOrderPage'
import OrderDetailsPage from './screen/OrderDetailsPage'
import UserListPage from './screen/UserListPage'
import UserEditPage from './screen/UserEditPage'
import ProductListPage from './screen/ProductListPage'
import ProductEditPage from './screen/ProductEditPage'
import OrderListPage from './screen/OrderListPage'

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
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/placeorder' element={<PlaceOrderPage />} />
            <Route path='/order/:orderId' element={<OrderDetailsPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:productId' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/cart/:productId' element={<CartPage />} />
            <Route path='/admin/userlist' element={<UserListPage />} />
            <Route path='/user/edit/:userId' element={<UserEditPage />} />
            <Route path='/admin/productlist' element={<ProductListPage />} />
            <Route path='/admin/orderlist' element={<OrderListPage />} />
            <Route
              path='/product/edit/:productId'
              element={<ProductEditPage />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
