import { Component, OnInit } from '@angular/core';
import { EvaluationFormService } from '../evaluation-form.service';
import { Evaluation } from '../evaluation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evalsession-admin',
  templateUrl: './evalsession-admin.component.html',
  styleUrls: ['./evalsession-admin.component.css']
})

export class EvalsessionAdminComponent implements OnInit {
  constructor(private service: EvaluationFormService,private route: ActivatedRoute) { } 
  evaluations: Evaluation[] = [];
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id){
      this.evaluations = this.service.getAllBySession(id);
    }
  }
}
