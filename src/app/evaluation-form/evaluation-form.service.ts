import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EvaluationFormService {
  private evaluationData: any[] = [];

  constructor() {}

  addEvaluationData(data: any) {
    this.evaluationData.push(data);
  }

  getEvaluationData() {
    return this.evaluationData;
  }
}
