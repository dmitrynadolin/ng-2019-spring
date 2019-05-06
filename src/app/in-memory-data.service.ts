import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {id: 1, name: 'Smith, John', score: 85},
      {id: 2, name: 'Johns, Mary', score: 70},
      {id: 3, name: 'Lint, James', score: 90},
      {id: 4, name: 'Kent, Kent', score: 60},
      {id: 5, name: 'Elly, Major', score: 95}
    ];
  
    return {students};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(students => students.id)) + 1 : 11;
  }
}