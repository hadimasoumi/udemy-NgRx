import { createReducer, on } from '@ngrx/store';
import { Course } from '../model/course';
import { CoursesActions } from './courses.actions';
import * as _ from 'lodash';
export interface coursesState {
  courses: Course[];
}

const initialCoursesState = {
  courses: [],
};

export const coursesReducers = createReducer(
  initialCoursesState,

  on(CoursesActions.loadAllCourses, (state, action) => {
    return {
      ...state,
    };
  }),

  on(CoursesActions.allCoursesLoaded, (state, action) => {
    const clonnedState: coursesState = _.deepClone(state);
    clonnedState.courses = [...action['courses']];
    return {
      ...clonnedState,
    };
  })
);
