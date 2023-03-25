import { createSelector } from '@ngrx/store';

const isLoggedIn = createSelector(
  state => state['auth'],
  auth => !!auth.user
);

export const AuthSelectors = {
  isLoggedIn,
};
