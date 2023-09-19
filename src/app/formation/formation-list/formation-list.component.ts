import { Component, OnInit } from '@angular/core';
import { Training } from '../formation';
import { FormationService } from '../formation.service';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})

export class FormationListComponent implements OnInit {
  constructor(private service: FormationService,private route: ActivatedRoute) { } 
  trainings: Training[] = [];

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.trainings = this.service.getTrainingsOfTheme(id);
  }
}
