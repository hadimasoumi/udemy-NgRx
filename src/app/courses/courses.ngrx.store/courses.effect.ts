import { coursesState } from './courses.reducers';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesActions, CoursesActionsEnums } from './courses.actions';
import { tap } from 'rxjs/operators';

export class CoursesEffects {
  loadAllCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesActions.loadAllCourses),
      tap(action => {
        if (action.type === CoursesActionsEnums.LOAD_ALL_COURSES) {
        }
      })
    );
  });

  constructor(private Store: Store<coursesState>, private actions$: Actions) {}
}
