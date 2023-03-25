import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthActions, AuthActionsEnums } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () =>
      this.actions$.pipe(
        // Filter actions stream to only handle actions of type `login`
        ofType(AuthActions.login),
        tap(action => {
          if (action.type == AuthActionsEnums.USER_LOGIN) {
            localStorage.setItem('user', JSON.stringify(action.user));
          }
        })
      ),
    { dispatch: false }
  );

  // The `{ dispatch: false }` option is used to indicate that an effect does not dispatch a new action to the store.
  // In this example, the `login$` effect does not dispatch any new action, it simply performs a side effect of saving the user object to local storage when the `AuthActions.login` action is dispatched.

  // By setting `{ dispatch: false }`, the effect is telling NgRx to not dispatch any new action to the store.
  // This is useful for effects that perform only a side effect, such as saving data to a database or updating the UI, and don't need to trigger any new actions.

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        // Filter actions stream to only handle actions of type `login`
        ofType(AuthActions.logout),
        tap(action => {
          if (action.type == AuthActionsEnums.LOGOUT) {
            localStorage.removeItem('user');
            this.router.navigateByUrl('/login');
          }
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
