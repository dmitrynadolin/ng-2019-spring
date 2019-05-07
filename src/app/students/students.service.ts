import { Injectable } from '@angular/core';
import { Student } from 'src/app/student';
import { STUDENTS } from 'src/app/mock-students';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private url = 'api/students';

  constructor(private http: HttpClient, private loggerService: LoggerService) { }

  public get(): Observable<Student[]> {
    this.loggerService.info("Fetching students..");

    return this.http.get<Student[]>(this.url);
  }



  public update (student: Student): Observable<any> {
    const url = `${this.url}/${student.id}`;
    
    return this.http.put(url, student, httpOptions).pipe(
      tap(_ => this.loggerService.info(`updated student id=${student.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  public find (id: number): Observable<Student> {
    const url = `${this.url}/${id}`;

    return this.http.get(url).pipe(
      tap(_ => this.loggerService.info(`fetched student id=${id}`)),
      catchError(this.handleError<any>(`find id=${id}`))
    );
  }

  private handleError<T> (operation, result?: T) {
    return (error: any): Observable<T> => {

      this.loggerService.error(`${operation} failed: ${error.message}`)
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};