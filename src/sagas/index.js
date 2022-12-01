import { all, takeLatest } from "redux-saga/effects";
import { Initiatives } from "../redux/actions/initiatives/constants";
import { Login } from "../redux/actions/login/constants";
import { Register } from "../redux/actions/register/constants";
import { User } from "../redux/actions/user/constants";
import { allInitiativesSaga, supportInitiativesSaga } from "./initiatives";
import { login, requestNewPassword, resetPassword } from "./login";
import { signup } from "./register";
import { userSaga, userUpdateSaga } from "./user";

function* appSagas() {
  yield all([
    takeLatest(Login.FETCH_LOGIN, login),
    takeLatest(Register.FETCH_REGISTER, signup),
    takeLatest(User.FETCH_USER, userSaga),
    takeLatest(User.USER_UPDATE_LOAD, userUpdateSaga),
    takeLatest(Initiatives.FETCH_ALL_INITIATIVES, allInitiativesSaga),
    takeLatest(Initiatives.FETCH_SUPPORT_INITIATIVES, supportInitiativesSaga),
    takeLatest(Login.CHANGE_PASSWORD_FETCH, resetPassword),
    takeLatest(Login.RESQUEST_NEW_PASS_FETCH, requestNewPassword)
  ]);
}
export default appSagas;
