import { Injectable, OnInit } from '@angular/core';
import { Instructor } from './instructor';
import { Skill } from '../skill/skill';
import { Training } from '../formation/formation';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstructorService implements OnInit {

  constructor(private httpClient: HttpClient) { }
  public instructors: Instructor[] = [
    {id : 0,firstName:"John",lastName:"Doe",phoneNumber:"0642151254",
    address:"Lille",skill:[{id:0,idInstructor : 0,experience:5,idTraining:0},{id:1,idInstructor : 0,experience:2,idTraining:3}],session:"" },
    {id : 1,firstName:"Alice",lastName:"Game",phoneNumber:"0642151254",
    address:"Lille",skill:[{id:2,idInstructor : 1,experience:2,idTraining:1},
      {id:3,idInstructor : 1,experience:5,idTraining:5},],session:"" },
  ]

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

  private apiUrl = "http://localhost:8080/api";
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  ngOnInit(): void {
  }

  create(instructor:Instructor): Observable<Instructor> {
    return this.httpClient.post<Instructor>(this.apiUrl + '/instructors/create', JSON.stringify(instructor), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id:number): Observable<Instructor> {
    return this.httpClient.get<Instructor>(this.apiUrl + '/instructors/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll2(): Observable<Instructor[]> {
    return this.httpClient.get<Instructor[]>(this.apiUrl + '/instructors/all')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, instructor:Instructor): Observable<Instructor> {
    return this.httpClient.put<Instructor>(this.apiUrl + '/instructors/' + id + "/update", JSON.stringify(instructor), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Instructor>(this.apiUrl + '/instructors/' + id+ "/delete", this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
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
