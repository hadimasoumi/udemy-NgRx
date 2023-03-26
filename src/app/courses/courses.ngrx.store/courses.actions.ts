import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Course } from '../model/course';

export enum CoursesActionsEnums {
  LOAD_ALL_COURSES = '[Courses Page] Load All Courses',
  ALL_COURSES_LOADED = '[Load Courses Effect] All Courses Loaded',
  UPDATE_COURSE = '[Edit Course Dialog] Update Course',
}

const loadAllCourses = createAction(CoursesActionsEnums.LOAD_ALL_COURSES);
const allCoursesLoaded = createAction(CoursesActionsEnums.ALL_COURSES_LOADED, props<{ courses: Course[] }>());
const courseUpdated = createAction(CoursesActionsEnums.UPDATE_COURSE, props<{ update: Update<Course> }>());

export const CoursesActions = {
  loadAllCourses,
  allCoursesLoaded,
  courseUpdated,
};
