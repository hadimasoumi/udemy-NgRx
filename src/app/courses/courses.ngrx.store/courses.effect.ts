import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesActions } from './courses.actions';
import { concatMap, map } from 'rxjs/operators';
import { CoursesHttpService } from '../services/courses-http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesEffects {
  loadAllCourses$ = createEffect(() => {
    return this.actions$.pipe(
      // filters the Observable of Actions into an observable of loadAllCourses action
      ofType(CoursesActions.loadAllCourses),
      concatMap(action => this.coursesHttpService.findAllCourses()),
      map(courses => {
        return CoursesActions.allCoursesLoaded({ courses });
      })
    );
  });

  constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService) {}
}
