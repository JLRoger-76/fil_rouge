import { Injectable } from '@angular/core';
import { Instructor } from './instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor() { }
  public instructors: Instructor[] = [
    {id : 0,firstName:"John",lastName:"Doe",phoneNumber:"0642151254",address:"Lille",skill:[],session:"" },
  
  ]
  public getAll(): Instructor[] {      
    return this.instructors;
  }
}
