import { createAction, props } from '@ngrx/store';
import { Course } from '../model/course';

export enum CoursesActionsEnums {
  LOAD_ALL_COURSES = '[Courses Page] Load All Courses',
  ALL_COURSES_LOADED = '[Load Courses Effect] All Courses Loaded',
}

const loadAllCourses = createAction(CoursesActionsEnums.LOAD_ALL_COURSES);
const allCoursesLoaded = createAction(CoursesActionsEnums.ALL_COURSES_LOADED, props<{ courses: Course[] }>());

export const CoursesActions = {
  loadAllCourses,
  allCoursesLoaded,
};
