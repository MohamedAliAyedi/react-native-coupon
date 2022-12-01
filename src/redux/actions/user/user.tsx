const USER = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_PROFILE_PHOTO: 'UPDATE_PROFILE_PHOTO',
};

export default USER;

export const USER_LOGIN_ACTION = payload => {
  return {type: USER.LOGIN, payload};
};

export const USER_LOGOUT_ACTION = () => {
  return {type: USER.LOGOUT};
};

export const USER_UPDATE_PROFILE_PHOTO = payload => {
  return {type: USER.UPDATE_PROFILE_PHOTO, payload};
};

