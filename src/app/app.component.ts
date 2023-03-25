import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
    const userProfile = localStorage.getItem('user');
    if (userProfile) {
      this.store.dispatch(AuthActions.login({ user: JSON.parse(userProfile) }));
    }
    this.isLoggedIn$ = this.store.pipe(select(AuthSelectors.isLoggedIn));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
