import { Injectable } from '@angular/core';
import { Student } from 'src/app/student';
import { STUDENTS } from 'src/app/mock-students';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../logger.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
