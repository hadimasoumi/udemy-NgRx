import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthActions } from './auth/auth.ngrx.store/auth.actions';
import { AuthState } from './auth/auth.ngrx.store/auth.reducers';
import { AuthSelectors } from './auth/auth.ngrx.store/auth.selectors';

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

    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
