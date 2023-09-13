import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css'],
})
export class InscriptionFormComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  FormA = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),

    city: new FormControl(''),
    postalCode: new FormControl(''),
  });

  get f() {
    return this.FormA.controls;
  }

  onSubmit() {
    console.log(this.FormA.value);
  }
}
