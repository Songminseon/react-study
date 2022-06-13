/* eslint-disable */
const initState = false;

// state => 현재 스테이트
// action => payload받음
const authReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return true;
    case 'LOGOUT_USER':
      return false;
    default:
      return state;
  }
};

export default authReducer;
