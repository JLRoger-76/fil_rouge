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
    
    public themeParent:string = "";
	  
    getThemes(id:number):any {
		let selectedThemes:any[] = [];// Themes + info haschild
    let selectedTheme:any;
    
		this.themeParent = this.themes[id].parent;
   
    this.themes.forEach(theme =>{ 
      let hasChild = false;//initialise présence sous-themes
      if (theme.parent==this.themes[id].name){
        //test sous-theme
        this.themes.forEach(subTheme =>{
          if ( subTheme.parent == theme.name ) hasChild=true;         
        });//fin forEach
        selectedTheme=theme;
        selectedTheme.child=hasChild;
        selectedThemes.push(selectedTheme);
      } 
		});//fin forEach
    
		return selectedThemes;		
	  };

    public deleteTheme(id: number): void {
      this.themes = this.themes.filter(t => t.id !== id);
      }
}
