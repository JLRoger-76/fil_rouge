import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [EvaluationFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [],
})
export class EvaluationFormModule {}
