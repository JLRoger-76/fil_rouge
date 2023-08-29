import { Injectable } from '@angular/core';
import { Training } from './formation';
import { Theme } from '../theme/theme';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() { }
  public trainings: Training[] = [
    {idTraining : 0, name : "Java initiation", price : 500, detail:"",idTheme:[6]},
    {idTraining : 1, name : "Java avancé", price : 1500, detail:"",idTheme:[6,5]},
    {idTraining : 2, name : "Java pro", price : 1800, detail:"",idTheme:[6]} ] 

   public themes: Array<Theme> = [
    {idTheme : 1, name : "Domaine", idParent : 0,idTraining:[]},
	  {idTheme : 2, name : "Finance", idParent : 1,idTraining:[]},
 	  {idTheme : 3, name : "Informatique", idParent : 1,idTraining:[]},
 	  {idTheme : 4, name : "Management", idParent : 1,idTraining:[]},
	  {idTheme : 5, name : "Reseaux", idParent : 3,idTraining:[]},
	  {idTheme : 6, name : "Langages de développement", idParent : 3,idTraining:[1,2]},
	  {idTheme : 7, name : "Systemes d'exploitations", idParent : 3,idTraining:[1,3]},
	  {idTheme : 8, name : "Gestion de projets", idParent : 3,idTraining:[]}, ];
      
  public hierarchicalThemes:Array<any> = [];
  showThemes(idformation:number,idParent:number=0,submark:string=" "):Theme[] {  
    this.themes.forEach(theme =>{ 
      if (theme.idParent==idParent){
        let hasChild = false;//initialise présence sous-themes
        this.themes.forEach(subtheme =>{
            if ( subtheme.idParent == theme.idTheme ) hasChild=true;         
        });
        let hierarchicalTheme:any=theme;        
          hierarchicalTheme.name=submark+theme.name;
          hierarchicalTheme.disabled=hasChild;  // ajout attribut bool disabled 
          hierarchicalTheme.selected="";//ajout attribut bool selected
          
          hierarchicalTheme.selected=(this.getTrainingsOfTheme(theme.idTheme).length>0)
          
          console.log(hierarchicalTheme);    
        this.hierarchicalThemes.push(hierarchicalTheme);
        this.showThemes(idformation,theme.idTheme,"\u{007F}"+submark)
      };
    });//fin forEach
    return this.hierarchicalThemes;
  };

  public getAll(): Training[] {      
    return this.trainings;
  }
  
  public getTrainingsOfTheme(id:number): Training[] {
    let selectedTrainings:Training[] = [];// Themes avec idTheme=id 
    this.trainings.forEach(training =>{ 
        training.idTheme.forEach(idTheme=>{
          if(idTheme==id) selectedTrainings.push(training);
        });
    });
    return selectedTrainings;
  }

  public getTrainingById(id:number): Training|undefined { 
    return this.trainings.find( t => t.idTraining == id );
  } 
  
  public deleteTraining(id: number): void {
    this.trainings = this.trainings.filter(t => t.idTraining !== id);
    }
}
  
