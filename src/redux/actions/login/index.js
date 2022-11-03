import { Login } from "./constants"


export const loginRequest = (payload) => {
  return {
    type: Login.FETCH_LOGIN,
    payload: payload 
  }
}

export const loginSuccessed = (data) => {
  return {
    type: Login.LOGIN_SUCCESS,
    data: data,
  }
}


export const loginFailed = (error) => {
  return {
    type: Login.LOGIN_FAILED,
    error: error,
  }
}

export const logout = () => {
  return {
    type: Login.LOGOUT
  }
}
