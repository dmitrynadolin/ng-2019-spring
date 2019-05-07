import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  


  constructor() { }

  public info(message: string){
    console.info(message);
  }
  
  public error(message: string) {
    console.error(message);
  }
}
