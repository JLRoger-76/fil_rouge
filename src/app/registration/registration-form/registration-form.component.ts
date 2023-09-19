import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  constructor(private route: ActivatedRoute,private service:RegistrationService) {}
  
  public id:number =0;
  ngOnInit(): void {}
  FormB = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  get f() {
    return this.FormB.controls;
  }

  updateUser() {
    this.service.updateUserById(this.id, this.FormB.value).subscribe((data) => {
      console.log('User updated', data);
    });
  }

  deleteUser() {
    this.service.deleteUserById(this.id).subscribe((data) => {
      console.log('User deleted', data);
      // Vous pouvez effectuer des actions supplémentaires ici, comme rediriger l'utilisateur.
    });
  }

  getUser() {
    this.service.deleteUserById(this.id).subscribe((data) => {
      console.log('User deleted', data);
      // Vous pouvez afficher les données de l'utilisateur dans le formulaire ou ailleurs dans le composant.
    });
  }
  onSubmit() {
    console.log(this.FormB.value);
  }
}
