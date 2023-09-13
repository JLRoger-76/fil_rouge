import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  FormB = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  get f() {
    return this.FormB.controls;
  }

  onSubmit() {
    console.log(this.FormB.value);
  }
}
