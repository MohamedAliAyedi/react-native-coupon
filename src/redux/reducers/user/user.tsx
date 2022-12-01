import ACTIONS from '../../actions';

const initialState = {
  isLoggedIn: false,
  qteInCart: 0,
  id: null,
  username: '',
  phone: '',
  image: null,
  email: '',
  country: '',
  region: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER.LOGIN:
      return {...state, ...action?.payload, isLoggedIn: true};
    case ACTIONS.USER.LOGOUT:
      return {isLoggedIn: false};
    case ACTIONS.USER.UPDATE_PROFILE_PHOTO:
      return {...initialState};
    default:
      return state;
  }
};

export default userReducer;
