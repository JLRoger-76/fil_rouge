import { Injectable } from '@angular/core';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  public themes: Array<Theme> = [
    {idTheme : 1, name : "Domaine", idParent : 0,idTraining:[]},
	  {idTheme : 2, name : "Finance", idParent : 1,idTraining:[]},
 	  {idTheme : 3, name : "Informatique", idParent : 1,idTraining:[]},
 	  {idTheme : 4, name : "Management", idParent : 1,idTraining:[]},
	  {idTheme : 5, name : "Reseaux", idParent : 3,idTraining:[]},
	  {idTheme : 6, name : "Langages de développement", idParent : 3,idTraining:[0,1,2]},
	  {idTheme : 7, name : "Systemes d'exploitations", idParent : 3,idTraining:[]},
	  {idTheme : 8, name : "Gestion de projets", idParent : 3,idTraining:[]}, ];
	  
    getAll(){
      return this.themes;
    }
    
    public themeParent:number = 0;
	  
    getThemes(idParent:number):Theme[] {
		let selectedThemes:any[] = [];// Themes + info haschild
    let selectedTheme:any;	
		this.themeParent = this.themes[idParent].idParent;

    this.themes.forEach(theme =>{     
      let hasChild = false;//initialise présence sous-themes
      if( theme.idParent == idParent ) {
        //test sous-theme
        this.themes.forEach(subTheme =>{
          if ( subTheme.idParent == theme.idTheme ) hasChild=true;         
        });//fin forEach
        selectedTheme=theme;
        selectedTheme.child=hasChild;
        selectedThemes.push(selectedTheme);
      }			
		});//fin forEach
		return selectedThemes;		
	  };

    public deleteTheme(id: number): void {
      this.themes = this.themes.filter(t => t.idTheme !== id);
      }
}
