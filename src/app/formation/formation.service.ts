import { Injectable } from '@angular/core';
import { Training } from './formation';
import { Theme } from '../theme/theme';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() { }
  public trainings: Training[] = [
    {id : 0, title : "Java initiation", price : 500, content:"",theme:["Langages de développement"]},
    {id : 1, title : "Java avancé", price : 1500, content:"",theme:["Langages de développement"]},
    {id : 2, title : "Java pro", price : 1800, content:"",theme:["Langages de développement"]},
    {id : 3, title : "PHP", price : 1300, content:"",theme:["Langages du WEB"]},
    {id : 4, title : "Javascript", price : 1300, content:"",theme:["Langages du WEB"]},
    {id : 5, title : "Ajax", price : 1300, content:"",theme:["Langages du WEB"]},
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

  public selectedThemes:Array<any> = [];
  
  public getselectedThemesOfTraining(id:number):any[]{
    let training:Training|undefined=this.getTrainingById(id);//training
    let themesTraining:string[]|undefined=training?.theme;//tableau de ses themes
    this.themes.forEach(theme=> {     
      let selectedTheme:any=theme;
      selectedTheme.selected=themesTraining?.some(x => x===theme.name);
      // cherche si le theme en cours est présent dans le themeTraining
      this.selectedThemes.push(theme);
    })
    return this.selectedThemes;
  }

  public getAll(): Training[] {      
    return this.trainings;
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
  
