import { Injectable } from '@angular/core';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  public themes: Array<Theme> = [
    {id : 0, name : "Domaine",parent:"", children:["Finance","Informatique","Management"],formations:[]},
    {id : 1, name :"Finance",parent:"Domaine",children:[],formations:[]},
    {id : 2, name :"Informatique",parent:"Domaine",children:["Réseaux","Langages de développement","Systèmes d'exploitation","Gestion de Projets"],formations:[]},
    {id : 3, name :"Management",parent:"Domaine",children:[],formations:[]},
    {id : 4, name :"Réseaux",parent:"Informatique",children:[],formations:[]},
    {id : 5, name :"Langages de développement",parent:"Informatique",children:[],formations:["JAVA","C#","C++"]},
     ]
	  
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
