import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { userActions } from '../reducers/userReducer';
import { loginUser, signUp, logoutUser, updateUser, getUser } from '../api/userApi';

// Login
function* loginUserApi(action) {
  try {
    const { data } = yield call(loginUser, action.payload);

    yield put(userActions.loginUserSuc(data));
  } catch (e) {
    yield put(
      userActions.loginUserFail({ success: false, msg: e.message}),
    );
  }
}

// Signup
function* signUpApi(action) {
  try {
    const { data } = yield call(signUp, action.payload);

    yield put(userActions.signUpSuc(data));
  } catch (e) {
    yield put(
      userActions.signUpFail({ success: false, msg:e.message }),
    );
  }
}

// Logout
function* logoutUserApi(action) {
  try {
    // const { data } = yield call(logoutUser);
    
    yield put(userActions.logoutUserSuc());
  } catch (e) {
    yield put(
      userActions.logoutUserFail({ success: false, msg: '서버에러입니다.' }),
      );
    }
}

function* updateUserApi(action) {
  try {
    // console.log('사가시작');
    // console.log(action.payload);
    const { data } = yield call(updateUser, action.payload);
    yield put(userActions.updateUserSuc(data));
  } catch (err) {
    console.log(err.message);
    yield put(
      userActions.updateUserFail({ success: false, msg: err.message}),
      );
    }
}


function* getUserApi(action) {
  try{
    console.log('get User API 실행');
    console.log(action.payload)
    const { data } = yield call(getUser, action.payload);
    yield put(userActions.getUserSuc(data));
  } catch (err) {
    console.log(err.message);
    yield put(
      userActions.getUserFail({success: false, msg: err.message})
    )
  }
}


function* watchLogoutUser() {
  yield takeLatest(userActions.logoutUserReq, logoutUserApi);
}

function* watchLoginUser() {
  yield takeLatest(userActions.loginUserReq, loginUserApi);
}

function* watchSignUp() {
  yield takeLatest(userActions.signUpReq, signUpApi);
}

function* watchUpdateUser() {
  yield takeLatest(userActions.updateUserReq, updateUserApi);
}

function* watchGetUser() {
  yield takeLatest(userActions.getUserReq, getUserApi);
}

export default function* userSaga() {
  yield all([fork(watchLoginUser), fork(watchSignUp), fork(watchLogoutUser), fork(watchUpdateUser), fork(watchGetUser)]);
}
