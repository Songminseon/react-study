const initState = {
  name: '',
  imgUrl: '',
};

const userReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        name: 'minseon',
        imgUrl: '',
      };
    case 'DELETE_USER':
      return {
        name: '',
        imgUrl: '',
      };

    default:
      return state;
  }
};

export default userReducer;
