import { Injectable, OnInit } from '@angular/core';
import { Session } from './session';
import { Training } from '../formation/formation';
import { Theme } from '../theme/theme';
import { Instructor } from '../instructor/instructor';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements OnInit{

  constructor() { }
  public sessions: Session[] = [
    {id : 0,formation:"Java débutant",instructor:"Doe",startDate:"01/01/2024",endDate:"05/01/2024",address:"Lille"},
  ]

  public trainings: Training[] = [
    {id : 0, title : "Java initiation", price : 500, content:"",theme:["Langages de développement"]},
    {id : 1, title : "Java avancé", price : 1500, content:"",theme:["Langages de développement"]},
    {id : 2, title : "Java pro", price : 1800, content:"",theme:["Langages de développement"]} ] 

    public themes: Array<Theme> = [
      {id : 0, name : "Domaine",parent:"", children:["Finance","Informatique","Management"],formations:[]},
      {id : 1, name :"Finance",parent:"Domaine",children:[],formations:[]},
      {id : 2, name :"Informatique",parent:"Domaine",children:["Réseaux","Langages de développement","Systèmes d'exploitation","Gestion de Projets"],formations:[]},
      {id : 3, name :"Management",parent:"Domaine",children:[],formations:[]},
      {id : 4, name :"Réseaux",parent:"Informatique",children:[],formations:[]},
      {id : 5, name :"Langages de développement",parent:"Informatique",children:[],formations:["JAVA","C#","C++"]},
      {id : 6, name :"Systèmes d'exploitation",parent:"Informatique",children:[],formations:[]},
      {id : 7, name :"Gestion de Projets",parent:"Informatique",children:[],formations:[]},
     ] 

     public instructors: Instructor[] = [
      {id : 0,firstName:"John",lastName:"Doe",phoneNumber:"0642151254",
      address:"Lille",skill:[{id:1,name:"GIT",experience:5}],session:"" },
      {id : 1,firstName:"Alice",lastName:"Game",phoneNumber:"0642151254",
      address:"Lille",skill:[{id:1,name:"GIT",experience:4},{id:2,name:"C#",experience:3}],session:"" },
    ]

     
  ngOnInit(): void {
  }

  public getAll(): Session[] {      
    return this.sessions;
  }

  public getSessionById(id:number): Session|undefined { 
    return this.sessions.find( t => t.id == id );
  } 
}
