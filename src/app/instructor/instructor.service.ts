import { Injectable, OnInit } from '@angular/core';
import { Instructor } from './instructor';
import { Skill } from '../skill/skill';

@Injectable({
  providedIn: 'root'
})
export class InstructorService implements OnInit {

  constructor() { }
  public instructors: Instructor[] = [
    {id : 0,firstName:"John",lastName:"Doe",phoneNumber:"0642151254",
    address:"Lille",skill:[{id:1,name:"GIT",experience:5}],session:"" },
    {id : 1,firstName:"Alice",lastName:"Game",phoneNumber:"0642151254",
    address:"Lille",skill:[{id:1,name:"GIT",experience:4},{id:2,name:"C#",experience:3}],session:"" },
  ]

  public skills: Skill[] = [
    {id : 0, name : "Java",experience:5},
    {id : 1, name : "Java",experience:3},
    {id : 2, name : "Angular",experience:2},
    {id : 3, name : "Php",experience:3}
  ]

  ngOnInit(): void {
  }
  
  public getAll(): Instructor[] {      
    return this.instructors;
  }

  public getInstructorById(id:number): Instructor|undefined { 
    return this.instructors.find( t => t.id == id );
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
