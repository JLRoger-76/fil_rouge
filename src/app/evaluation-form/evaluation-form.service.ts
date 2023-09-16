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
      receptionScore:1,
      environmentScore:1,
      contentScore:1,
      pedagogyScore:1,
      skillScore:1,
      upTimeScore:1,
      answersScore:1,
      facilitationScore:1,
      satisfactionScore:1,
      recommandationScore:"OK",
      trainingProject:"non",
      idSession:0,
      idStudent:1
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
