import { refreshUser, logOut } from './slices/authSlice';

const refreshTokenMiddleware = store => next => action => {
  const currentState = store.getState();
  const isLoggedIn = currentState.auth.isLoggedIn;
  if (isLoggedIn && action.type.endsWith('rejected') && action.payload === "Request failed with status code 401") {
    store.dispatch(refreshUser())
        .catch(() => {
          store.dispatch(logOut());
        });
  }

  return next(action);
};

export default refreshTokenMiddleware;