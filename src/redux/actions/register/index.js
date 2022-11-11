import { Register } from "./constants"


export const registerRequest = (payload) => {
  return {
    type: Register.FETCH_REGISTER,
    payload: payload 
  }
}

export const registerSuccessed = (data) => {
  console.log(data)
  return {
    type: Register.REGISTER_SUCCESS,
    data: data,
  }
}


export const registerFailed = (error) => {
  return {
    type: Register.REGISTER_FAILED,
    error: error,
  }
}
