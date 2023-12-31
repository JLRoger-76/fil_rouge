import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports:[
    NavbarComponent
  ],
})
export class NavbarModule { }
