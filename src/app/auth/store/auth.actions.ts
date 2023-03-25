import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export enum AuthActionsEnums {
  USER_LOGIN = '[Login Page] User Login',
  LOGOUT = '[Top Menu] Logout',
}
const login = createAction('[Login Page] User Login', props<{ user: User }>());

const logout = createAction('[Top Menu] Logout');

export const AuthActions = {
  login,
  logout,
};
