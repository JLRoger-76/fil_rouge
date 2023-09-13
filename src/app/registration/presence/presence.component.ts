import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css'],
})
export class PresenceComponent implements OnInit {
  checked: Boolean = false;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  FormC = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    presence: new FormControl(true),
  });
  get f() {
    return this.FormC.controls;
  }

  onSubmit() {
    console.log('Nom:', this.FormC.value.nom);
    console.log('Prénom:', this.FormC.value.prenom);
    console.log('Presence:', this.checkValue());
  }

  checkValue() {
    return this.checked.valueOf();
  }
}
