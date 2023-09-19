import { Injectable } from '@angular/core';
import { Skill } from './skill';
import { Training } from '../formation/formation';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
  public skills: Skill[] = [
    {id:0,idInstructor : 0,experience:5,idTraining:0},
    {id:1,idInstructor : 0,experience:2,idTraining:3},
    {id:2,idInstructor : 1,experience:2,idTraining:1},
    {id:3,idInstructor : 1,experience:5,idTraining:5},
  ]

  public trainings: Training[] = [
    {id : 0, title : "Java initiation", price : 500, content:"",theme:["Langages de développement"]},
    {id : 1, title : "Java avancé", price : 1500, content:"",theme:["Langages de développement"]},
    {id : 2, title : "Java pro", price : 1800, content:"",theme:["Langages de développement"]},
    {id : 3, title : "PHP", price : 1300, content:"",theme:["Langages du WEB"]},
    {id : 4, title : "Javascript", price : 1300, content:"",theme:["Langages du WEB"]},
    {id : 5, title : "Ajax", price : 1300, content:"",theme:["Langages du WEB"]},
  ]  

  public getAll(): Skill[] {      
    return this.skills;
  }
  
  public getSkillById(id:number): Skill|undefined { 
    return this.skills.find( t => t.id == id );
  } 

}