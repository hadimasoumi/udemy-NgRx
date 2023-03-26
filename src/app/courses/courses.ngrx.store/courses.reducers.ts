import { createReducer, on } from '@ngrx/store';
import { compareCourses, Course } from '../model/course';
import { CoursesActions } from './courses.actions';
import * as _ from 'lodash';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
export interface CourseState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adaptor = createEntityAdapter<Course>({
  sortComparer: compareCourses,
});
export const { selectAll } = adaptor.getSelectors();

const initialCoursesState = adaptor.getInitialState({
  allCoursesLoaded: false,
});

export const coursesReducers = createReducer(
  initialCoursesState,

  on(CoursesActions.allCoursesLoaded, (state, action) => {
    return adaptor.addMany(action.courses, { ...state, allCoursesLoaded: true });
  })
);
