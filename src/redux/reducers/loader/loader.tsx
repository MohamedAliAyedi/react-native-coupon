import ACTIONS from '../../actions';

const initialState = {
  loading: false,
};
const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOADER.START:
      return {...state, loading: true};
    case ACTIONS.LOADER.STOP:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default loaderReducer;
