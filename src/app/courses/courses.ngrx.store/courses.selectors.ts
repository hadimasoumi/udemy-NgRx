import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './courses.reducers';
import * as fromReducers from './courses.reducers';
const selectCourseState = createFeatureSelector<CourseState>('courses');

const selectAllCourses = createSelector(selectCourseState, fromReducers.selectAll);
const selectBeginnerCourses = createSelector(selectAllCourses, courses => courses.filter(course => course.category === 'BEGINNER'));
const selectAdvancedCourses = createSelector(selectAllCourses, courses => courses.filter(course => course.category === 'ADVANCED'));
const selectPromoTotal = createSelector(selectAllCourses, courses => courses.filter(course => course.promo).length);
const areCoursesLoaded = createSelector(selectCourseState, state => state.allCoursesLoaded);

export const coursesSelectors = {
  selectAllCourses,
  selectBeginnerCourses,
  selectAdvancedCourses,
  selectPromoTotal,
  areCoursesLoaded,
};
