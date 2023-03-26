import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { CoursesActions } from '../courses.ngrx.store/courses.actions';
import { CourseState } from '../courses.ngrx.store/courses.reducers';
import { coursesSelectors } from '../courses.ngrx.store/courses.selectors';

@Injectable({
  providedIn: 'root',
})
export class CoursesResolver implements Resolve<boolean> {
  loading = false;
  constructor(private store: Store<CourseState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(coursesSelectors.areCoursesLoaded),
      tap(coursesLoaded => {
        if (!this.loading && !coursesLoaded) {
          this.loading = true;
          this.store.dispatch(CoursesActions.loadAllCourses());
        }
      }),
      filter(coursesLoaded => coursesLoaded),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
