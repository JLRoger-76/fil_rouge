import { Injectable } from '@angular/core';
import { Evaluation } from './evaluation';

@Injectable({
  providedIn: 'root',
})
export class EvaluationFormService {
  private evaluationData: any[] = [];

  constructor() {}
  public evaluations: Evaluation[] = [
    {id:1,
      receptionScore:4,
      environmentScore:4,
      contentScore:3,
      pedagogyScore:5,
      skillScore:5,
      upTimeScore:4,
      answersScore:3,
      facilitationScore:3,
      satisfactionScore:3,
      recommandationScore:"OK",
      trainingProject:"non",
      idSession:0,
      student:"Jean Emar"
    }
  ]
  public getAllBySession(id:number): Evaluation[] { 
    let selectedEvaluations:Evaluation[] = [];
    this.evaluations.forEach(evaluation=>{
      if(evaluation.idSession==id)
     
      selectedEvaluations.push(evaluation)       
      })   
      console.log(selectedEvaluations)      
    return selectedEvaluations;
  } 

  addEvaluationData(data: any) {
    this.evaluationData.push(data);
  }

  getEvaluationData() {
    return this.evaluationData;
  }
}
