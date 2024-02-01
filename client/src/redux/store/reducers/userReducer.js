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
      state.isloading = true;
      state.errMsg = '';
      state.isErr = false;
    },
    loginUserSuc(state, action) {
      state.isloading = false;

      window.location.href = '/';
      sessionStorage.setItem('token', action.payload.token);
      sessionStorage.setItem('id', action.payload.user.id)

      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginUserFail(state, action) {
      state.isloading = false;
      sessionStorage.removeItem('token');

      state.errMsg = action.payload.msg;
      state.isErr = true;
    },
    signUpReq(state, action) {
      state.isloading = true;
      state.errMsg = '';
      state.isErr = false;
    },
    signUpSuc(state, action) {
      state.isloading = false;
      sessionStorage.clear();
      window.location.href = '/login'
      
      state.errMsg = action.payload.msg;
      state.isErr = true;
    },
    signUpFail(state, action) {
      state.isloading = false;
      sessionStorage.removeItem('token');
    
      state.errMsg = action.payload.msg;
      alert(state.errMsg);
      state.isErr = true;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
