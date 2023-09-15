import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css'],
})
export class InscriptionFormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private registrationService: RegistrationService
  ) {}
  public id: number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  FormA = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),

    city: new FormControl(''),
    postalCode: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  get f() {
    return this.FormA.controls;
  }

  onSubmit() {
    console.log(this.FormA.value);
    // console.log(this.id);
    this.registrationService
      .register(this.FormA)
      .subscribe((data) => console.log(data));
  }
}
