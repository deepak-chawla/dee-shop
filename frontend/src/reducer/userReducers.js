import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
} from '../constant/userConstants.js'

export const updateUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_REQUEST:
      return { ...state, loading: true }
    case UPDATE_USER_PROFILE_SUCCESS:
      return { loding: false, success: true, userInfo: action.payload }
    case UPDATE_USER_PROFILE_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loding: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loding: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loding: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loding: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
