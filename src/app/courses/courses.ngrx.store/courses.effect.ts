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

  saveCourse$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CoursesActions.courseUpdated),
        concatMap(action => this.coursesHttpService.saveCourse(action.update.id, action.update.changes))
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService) {}
}
