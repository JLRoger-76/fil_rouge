import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css'],
})
export class InscriptionFormComponent implements OnInit {
  constructor(private route: ActivatedRoute, private registrationService: RegistrationService) {}

public id:number =0;
  ngOnInit(): void {}
  FormA = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    postalCode: new FormControl(''),
    phoneNumber: new FormControl(''),
    companyName: new FormControl(''),
    position: new FormControl(''),

  });


  get f() {
    return this.FormA.controls;
  }

  onSubmit() {
    console.log(this.FormA.value);
  }
 
}
