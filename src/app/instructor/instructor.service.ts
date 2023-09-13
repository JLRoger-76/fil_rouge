import { Injectable, OnInit } from '@angular/core';
import { Instructor } from './instructor';
import { Skill } from '../skill/skill';
import { Training } from '../formation/formation';

@Injectable({
  providedIn: 'root'
})
export class InstructorService implements OnInit {

  constructor() { }
  public instructors: Instructor[] = [
    {id : 0,firstName:"John",lastName:"Doe",phoneNumber:"0642151254",
    address:"Lille",skill:[{id:0,idInstructor : 0,experience:5,idTraining:0},],session:"" },
    {id : 1,firstName:"Alice",lastName:"Game",phoneNumber:"0642151254",
    address:"Lille",skill:[{id:1,idInstructor : 1,experience:2,idTraining:1},
      {id:2,idInstructor : 1,experience:5,idTraining:2},],session:"" },
  ]

  public skills: Skill[] = [
    {id:0,idInstructor : 0,experience:5,idTraining:0},
    {id:1,idInstructor : 1,experience:2,idTraining:1},
    {id:2,idInstructor : 1,experience:5,idTraining:2},
  ]

  public trainings: Training[] = [
    {id : 0, title : "Java initiation", price : 500, content:"",theme:["Langages de développement"]},
    {id : 1, title : "Java avancé", price : 1500, content:"",theme:["Langages de développement"]},
    {id : 2, title : "Java pro", price : 1800, content:"",theme:["Langages de développement"]},
    {id : 3, title : "PHP", price : 1300, content:"",theme:["Langages du WEB"]},
    {id : 4, title : "Javascript", price : 1300, content:"",theme:["Langages du WEB"]},
    {id : 5, title : "Ajax", price : 1300, content:"",theme:["Langages du WEB"]},
  ] 

  ngOnInit(): void {
  }
  
  public getAll(): Instructor[] {      
    return this.instructors;
  }

  public getAllTraining():Training[]{
   return this.trainings;
  }
  
  public getInstructorById(id:number): Instructor|undefined { 
    return this.instructors.find( t => t.id == id );
  } 

  public getByFormationId(id:number){
    return this.instructors;
  }

  public selectedSkills:Array<any> = [];

  public getSkillsOfInstructor(id:number):any[]{
    //skills de l'instructor id
    let instructorSkills=this.instructors.find( t => t.id == id )?.skill;
    this.skills.forEach(skill=>{
      let selectedSkill:any=skill;
      instructorSkills?.forEach(instructorSkill=>{
          selectedSkill.selected=(instructorSkill==skill);
          console.log(selectedSkill)
      })      
    })
    return this.selectedSkills;
  }
}
