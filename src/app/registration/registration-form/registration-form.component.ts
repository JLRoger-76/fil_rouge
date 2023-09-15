import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: RegistrationService
  ) {}
  public id: number = 0;
  registeredUser: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  FormB = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  get f() {
    return this.FormB.controls;
  }

  onSubmit() {
    console.log(this.FormB.value);
    console.log(this.id);
    const username = this.f.username.value; // Récupérer l'email du formulaire
    // this.service.getDonneesBy(email!).subscribe((data) => {
    //   this.registeredUser = data;
    //   console.log(this.registeredUser);
    // });
  }
}
