import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { EvalsessionAdminComponent } from './evalsession-admin/evalsession-admin.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    EvaluationFormComponent,
    EvalsessionAdminComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EvaluationFormModule {}
