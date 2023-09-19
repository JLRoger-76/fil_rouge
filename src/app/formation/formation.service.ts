import { Injectable } from '@angular/core';
import { Training } from './formation';
import { Theme } from '../theme/theme';
import { Session } from '../session/session';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient: HttpClient) { } 

  public trainings: Training[] = [
    {id : 0, title : "Java initiation", price : 500, content:"Formation Java initiation ouvert à tous",theme:["Langages de développement"]},
    {id : 1, title : "Java avancé", price : 1500, content:"formation Java avancé bac+2",theme:["Langages de développement"]},
    {id : 2, title : "Java pro", price : 1800, content:"Formation Java pro bac+3",theme:["Langages de développement"]},
    {id : 3, title : "PHP", price : 1300, content:"Formation PHP ouvert à tous",theme:["Langages du WEB"]},
    {id : 4, title : "Javascript", price : 1300, content:"Formation Javascript ouvert à tous",theme:["Langages du WEB"]},
    {id : 5, title : "Ajax", price : 1300, content:"Formation Ajax ouvert à tous",theme:["Langages du WEB"]},
  ] 

    public themes: Array<Theme> = [
      {id : 0, name : "Domaine",parent:"", children:["Finance","Informatique","Management"],formations:[]},
      {id : 1, name :"Finance",parent:"Domaine",children:[],formations:[]},
      {id : 2, name :"Informatique",parent:"Domaine",children:["Réseaux","Langages de développement","Systèmes d'exploitation","Gestion de Projets"],formations:[]},
      {id : 3, name :"Management",parent:"Domaine",children:[],formations:[]},
      {id : 4, name :"Réseaux",parent:"Informatique",children:[],formations:[]},
      {id : 5, name :"Langages de développement",parent:"Informatique",children:["Langages du WEB"],formations:["JAVA","C#","C++"]},
      {id : 6, name :"Langages du WEB",parent:"Langages de développement",children:[],formations:["PHP","Javascript","Ajax"]},
    ]
    
    public sessions: Session[] = [
      {id : 0,formation:"Java débutant",instructor:"Doe",startDate:"01/01/2024",endDate:"05/01/2024",address:"Lille"},
    ]

    private apiUrl = "http://localhost:8080/api";
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  
    create(training:Training): Observable<Training> {
    return this.httpClient.post<Training>(this.apiUrl + '/formations/create', JSON.stringify(training), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id:number): Observable<Training> {
    return this.httpClient.get<Training>(this.apiUrl + '/formations/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll2(): Observable<Training[]> {
    return this.httpClient.get<Training[]>(this.apiUrl + '/formations/all')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, training:Training): Observable<Theme> {
    return this.httpClient.put<Theme>(this.apiUrl + '/formations/' + id + "/update", JSON.stringify(training), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Training>(this.apiUrl + '/formations/' + id+ "/delete", this.httpOptions)
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
  
  public getselectedThemesOfTraining(id:number):any[]{
    let selectedThemes:Array<any> = [];
    this.getById(id).subscribe((data: Training)=>{
      console.log(data);
      let themesTraining:string[]|undefined=data.theme;//tableau de ses themes
      this.themes.forEach(theme=> {     
        let selectedTheme:any=theme;
        selectedTheme.selected=themesTraining?.some(x => x===theme.name);
        // cherche si le theme en cours est présent dans le themeTraining
        selectedThemes.push(theme);
      })
    })
    return selectedThemes;
  }

  public getAll(): Training[] {      
    return this.trainings;
  }

  public getAllSession(): Session[] {      
    return this.sessions;
  }

  public getTrainingsOfTheme(id:number): Training[] {
    let selectedTrainings:Training[] = [];
    //nom du theme selectionné
    let themename=this.themes.find(t=>t.id==id)?.name;
    this.trainings.forEach(training=>{
      //liste des themes de formation
      let trainingthemes=training.theme;
      trainingthemes.forEach(trainingtheme=>{
        //recherche equivalent
        if(trainingtheme==themename){
          selectedTrainings.push(training);
        }  
      })
    })   
    return selectedTrainings;
  }
  
  public getTrainingById(id:number): Training|undefined { 
    return this.trainings.find( t => t.id == id );
  } 
  
  public deleteTraining(id: number): void {
    this.trainings = this.trainings.filter(t => t.id !== id);
    }
}
  
