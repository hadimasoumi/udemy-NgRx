import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, finalize, first, map, tap } from 'rxjs/operators';
import { CourseEntityService } from './course-entity.service';

@Injectable()
export class CoursesResolver implements Resolve<boolean> {
  constructor(private courseService: CourseEntityService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.courseService.loaded$.pipe(
      tap(loaded => {
        if (!loaded) {
          this.courseService.getAll().pipe(map(courses => !!courses));
        }
      }),
      filter(loaded => !!loaded),
      first()
    );
  }
}
