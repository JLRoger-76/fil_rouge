import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';
import { OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css'],
})
export class EvaluationFormComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  FormD = new FormGroup({
    receptionScore: new FormControl(0),
    environmentScore: new FormControl(0),
    contentScore: new FormControl(0),
    pedagogyScore: new FormControl(0),
    skillScore: new FormControl(0),
    upTimeScore: new FormControl(0),
    answerScore: new FormControl(0),
    facilitationScore: new FormControl(0),
    satisfactionScore: new FormControl(0),
    recommendationScore: new FormControl(0),
    trainigproject: new FormControl(''),
  });
  onSubmit() {
    console.log(this.FormD.value);
  }
}
