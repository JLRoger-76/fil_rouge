import { Injectable, OnInit } from '@angular/core';
import { Instructor } from './instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService implements OnInit {

  constructor() { }
  public instructors: Instructor[] = [
    {id : 0,firstName:"John",lastName:"Doe",phoneNumber:"0642151254",address:"Lille",skill:[],session:"" },
  ]

  ngOnInit(): void {
  }
  
  public getAll(): Instructor[] {      
    return this.instructors;
  }

  public getInstructorById(id:number): Instructor|undefined { 
    return this.instructors.find( t => t.id == id );
  } 
}
