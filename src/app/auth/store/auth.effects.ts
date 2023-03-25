import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthActionsEnums } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {
    actions$.subscribe(action => {
      if (action['type'] == AuthActionsEnums.USER_LOGIN) {
        localStorage.setItem('user', JSON.stringify(action['user']));
      }
    });
  }
}
