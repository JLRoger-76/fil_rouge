import { Injectable } from '@angular/core';
import { Training } from './formation';
import { Theme } from '../theme/theme';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() { }
  public trainings: Training[] = [
    {id : 0, title : "Java initiation", price : 500, content:"",themes:["Langages de développement"]},
    {id : 1, title : "Java avancé", price : 1500, content:"",themes:["Langages de développement"]},
    {id : 2, title : "Java pro", price : 1800, content:"",themes:["Langages de développement"]} ] 

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

  public hierarchicalThemes:Array<any> = [];
  showThemes(idformation:number,parent:string="Domaine",submark:string=" "):Theme[] {  
    this.themes.forEach(theme =>{ 
      if (theme.parent==parent){       
        let hasChild = false;//initialise présence sous-themes
        if (theme.children.length>0) hasChild=true; 
        let hierarchicalTheme:any=theme;        
        hierarchicalTheme.name=submark+theme.name;
        hierarchicalTheme.disabled=hasChild;  // ajout attribut bool disabled 
          //ajout attribut bool selected         
        hierarchicalTheme.selected=(this.getTrainingsOfTheme(theme.id).length>0)  
        this.hierarchicalThemes.push(hierarchicalTheme);
        this.showThemes(idformation,theme.name,"\u{007F}"+submark)
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
       let theme=this.themes.find(t => t.id==id) ; 
       if(theme && theme.id==id) selectedTrainings.push(training);     
    });
   
    return selectedTrainings;
  }

  public getTrainingById(id:number): Training|undefined { 
    return this.trainings.find( t => t.id == id );
  } 
  
  public deleteTraining(id: number): void {
    this.trainings = this.trainings.filter(t => t.id !== id);
    }
}
  
