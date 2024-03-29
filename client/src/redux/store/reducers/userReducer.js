import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: {
    id: '',
    email: '',
    name: '',
    phone: '',
    age: '',
    address: '',
  },
  token: '',
  isErr: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserReq(state, action) {
      state.isLoading = true;
      state.errMsg = '';
      state.isErr = false;
    },
    loginUserSuc(state, action) {
      state.isLoading = false;

      window.location.href = '/';
      sessionStorage.setItem('token', action.payload.token);
      sessionStorage.setItem('id', action.payload.user.id);

      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginUserFail(state, action) {
      state.isLoading = false;
      sessionStorage.clear();
      state.errMsg = action.payload.msg;
      state.isErr = true;
    },
    //Signup
    signUpReq(state, action) {
      state.isLoading = true;
      state.errMsg = '';
      state.isErr = false;
    },
    signUpSuc(state, action) {
      state.isLoading = false;
      sessionStorage.clear();
      window.location.href = '/login';

      state.errMsg = action.payload.msg;
      state.isErr = true;
    },
    signUpFail(state, action) {
      state.isLoading = false;
      sessionStorage.removeItem('token');

      state.errMsg = action.payload.msg;
      alert(state.errMsg);
      state.isErr = true;
    },

    // Logout
    logoutUserReq(state, action) {
      state.isLoading = true;
      state.errMsg = '';
      state.isErr = false;
    },
    logoutUserSuc(state, action) {
      state.isLoading = false;

      window.location.href = '/login';
      sessionStorage.clear();

      state.user = {
        id: '',
        email: '',
        name: '',
        phone: '',
        age: '',
        address: '',
      };
      state.token = '';
    },
    logoutUserFail(state, action) {
      state.isLoading = false;
      state.errMsg = action.payload.msg;
      state.isErr = true;
    },

    //updateUser
    updateUserReq(state, action) {
      state.isLoading = true;
      state.errMsg = '';
      state.isErr = false;
    },
    updateUserSuc(state, action) {
      state.isLoading = false;
      state.user = action.payload.user;

      window.location.href = '/profile';
    },
    updateUserFail(state, action) {
      state.isLoading = false;
      alert(action.payload.msg);
      state.errMsg = action.payload.msg;
      state.isErr = true;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
