import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrationFormComponent, InscriptionFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
})
export class RegistrationModule {}
