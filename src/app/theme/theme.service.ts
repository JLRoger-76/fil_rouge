import { Injectable } from '@angular/core';
import { Theme } from './theme';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
//

  private apiUrl = "http://localhost:8080/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { } 
  

  public themes: Array<Theme> = [
    {id : 0, name : "Domaine",parent:"", children:["Finance","Informatique","Management"],formations:[]},
    {id : 1, name :"Finance",parent:"Domaine",children:[],formations:[]},
    {id : 2, name :"Informatique",parent:"Domaine",children:["Réseaux","Langages de développement","Systèmes d'exploitation","Gestion de Projets"],formations:[]},
    {id : 3, name :"Management",parent:"Domaine",children:[],formations:[]},
    {id : 4, name :"Réseaux",parent:"Informatique",children:[],formations:[]},
    {id : 5, name :"Langages de développement",parent:"Informatique",children:["Langages du WEB"],formations:["JAVA","C#","C++"]},
    {id : 6, name :"Langages du WEB",parent:"Langages de développement",children:[],formations:["PHP","Javascript","Ajax"]},
  ]


  create(theme:Theme): Observable<Theme> {
    return this.httpClient.post<Theme>(this.apiUrl + '/themes/', JSON.stringify(theme), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id:number): Observable<Theme> {
    return this.httpClient.get<Theme>(this.apiUrl + '/themes/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll2(): Observable<Theme[]> {
    return this.httpClient.get<Theme[]>(this.apiUrl + '/themes/all')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, theme:Theme): Observable<Theme> {
    return this.httpClient.put<Theme>(this.apiUrl + '/themes/' + id, JSON.stringify(theme), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete<Theme>(this.apiUrl + '/themes/' + id, this.httpOptions)
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

 
    getAll(){
      return this.themes;
    }
    
    public getThemeById(id:number): Theme|undefined { 
      return this.themes.find( t => t.id == id );
    } 
    public getThemeByName(name:string): Theme|undefined { 
      return this.themes.find( t => t.name == name );
    } 
    public idParent:number=0;
	 
    getThemes(id:number):Theme[] {
      this.idParent=id;
      let childrenThemes:Theme[]=[];
      // renvoi les themes enfants avec l'id
      let children=this.getThemeById(id)?.children;
      children?.forEach(child => {
        let childrenTheme=this.getThemeByName(child);
        if (childrenTheme)childrenThemes.push(childrenTheme);        
      });
		  return childrenThemes;		
	  };

    public deleteTheme(id: number): void {
      this.themes = this.themes.filter(t => t.id !== id);
      }
}
