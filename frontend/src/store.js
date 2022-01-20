import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
  productCreateReducer,
  productDeleteReducer,
  productUpdateReducer,
  addProductReviewReducer,
} from './reducer/productReducers'
import { cartReducer } from './reducer/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  updateUserProfileReducer,
  userListReducer,
  deleteUserReducer,
  updateUserReducer,
} from './reducer/userReducers'
import {
  createOrderReducer,
  myOrderListReducer,
  orderDetailsReducer,
  orderListReducer,
  updateOrderDeliveredReducer,
} from './reducer/orderReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  updateUserProfile: updateUserProfileReducer,
  updateUser: updateUserReducer,
  deleteUser: deleteUserReducer,
  createOrder: createOrderReducer,
  orderDetails: orderDetailsReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  updateOrderDelivered: updateOrderDeliveredReducer,
  addProductReview: addProductReviewReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : null

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
