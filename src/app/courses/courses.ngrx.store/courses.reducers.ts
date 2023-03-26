import { createReducer, on } from '@ngrx/store';
import { Course } from '../model/course';
import { CoursesActions } from './courses.actions';
import * as _ from 'lodash';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
export interface CourseState extends EntityState<Course> {
  courses: Course[];
}

export const adaptor = createEntityAdapter<Course>();
export const { selectAll } = adaptor.getSelectors();

const initialCoursesState = adaptor.getInitialState();

export const coursesReducers = createReducer(
  initialCoursesState,

  on(CoursesActions.allCoursesLoaded, (state, action) => {
    return adaptor.addMany(action.courses, state);
  })
);
