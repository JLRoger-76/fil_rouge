import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { Instructor } from '../instructor/instructor';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
  public skills: Skill[] = [
    {id : 0, name : "Java",experience:5},
    {id : 1, name : "Java",experience:3},
    {id : 2, name : "Angular",experience:2},
    {id : 3, name : "Php",experience:3}
  ]
  
  public getAll(): Skill[] {      
    return this.skills;
  }
  
  public getSkillById(id:number): Skill|undefined { 
    return this.skills.find( t => t.id == id );
  } 
}