import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthActions } from './auth/store/auth.actions';
import { AuthState } from './auth/store/auth.reducers';
import { AuthSelectors } from './auth/store/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = false;

  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private store: Store<AuthState>) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(AuthSelectors.isLoggedIn);
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
