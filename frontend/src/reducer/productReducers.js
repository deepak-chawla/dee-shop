import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_RESET,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_DETAILS_RESET,
  ADD_PRODUCT_REVIEW_FAIL,
  ADD_PRODUCT_REVIEW_REQUEST,
  ADD_PRODUCT_REVIEW_SUCCESS,
  ADD_PRODUCT_REVIEW_RESET,
  TOP_PRODUCT_FAIL,
  TOP_PRODUCT_REQUEST,
  TOP_PRODUCT_SUCCESS,
} from '../constant/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loding: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loding: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loding: false, error: action.payload }
    case PRODUCT_DETAILS_RESET:
      return {}
    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_CREATE_SUCCESS:
      return { loding: false, success: true, product: action.payload }
    case PRODUCT_CREATE_FAIL:
      return { loding: false, error: action.payload }
    case PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_UPDATE_SUCCESS:
      return { loding: false, success: true, product: action.payload }
    case PRODUCT_UPDATE_FAIL:
      return { loding: false, error: action.payload }
    case PRODUCT_UPDATE_RESET:
      return {}
    default:
      return state
  }
}

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DELETE_SUCCESS:
      return { loding: false, message: action.payload }
    case PRODUCT_DELETE_FAIL:
      return { loding: false, error: action.payload }
    case PRODUCT_DELETE_RESET:
      return {}
    default:
      return state
  }
}

export const addProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REVIEW_REQUEST:
      return { loading: true, ...state }
    case ADD_PRODUCT_REVIEW_SUCCESS:
      return { loding: false, success: true }
    case ADD_PRODUCT_REVIEW_FAIL:
      return { loding: false }
    case ADD_PRODUCT_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case TOP_PRODUCT_REQUEST:
      return { loading: true, products: [] }
    case TOP_PRODUCT_SUCCESS:
      return { loding: false, products: action.payload }
    case TOP_PRODUCT_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}
