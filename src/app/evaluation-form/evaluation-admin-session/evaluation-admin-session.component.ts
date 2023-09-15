import { Component, OnInit } from '@angular/core';
import { EvaluationFormService } from '../evaluation-form.service';
import { Evaluation } from '../evaluation';
import { ActivatedRoute } from '@angular/router';
@Component({

  selector: 'app-evaluation-admin-session',
  templateUrl: './evaluation-admin-session.component.html',
  styleUrls: ['./evaluation-admin-session.component.css']
})
export class EvaluationAdminSessionComponent implements OnInit {
  constructor(private service: EvaluationFormService,private route: ActivatedRoute) { } 
  evaluations: Evaluation[] = [];
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id){
      this.evaluations = this.service.getAllBySession(id);
    }
  }
}
