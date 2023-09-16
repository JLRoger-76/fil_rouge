import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AccueilModule { }
