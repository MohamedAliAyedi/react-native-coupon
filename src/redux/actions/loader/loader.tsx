const LOADER = {
  START: 'START',
  STOP: 'STOP',
};

export default LOADER;

export const LOADER_START_ACTION = () => {
  return {type: LOADER.START};
};
export const LOADER_STOP_ACTION = () => {
  return {type: LOADER.STOP};
};
