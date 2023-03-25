import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

const selectAuthState = createFeatureSelector<AuthState>('auth');

const isLoggedIn = createSelector(selectAuthState, auth => !!auth.user);

export const AuthSelectors = {
  isLoggedIn,
};
