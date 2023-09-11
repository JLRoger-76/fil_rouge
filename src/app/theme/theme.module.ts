import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme/theme.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    AppRoutingModule
  ]
})
export class ThemeModule { }
