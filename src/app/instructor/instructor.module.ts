import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorAdminComponent } from './instructor-admin/instructor-admin.component';
import { InstructorAdminEditComponent } from './instructor-admin-edit/instructor-admin-edit.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [ 
    InstructorAdminComponent,
    InstructorAdminEditComponent,

  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    NavbarModule,
    AppRoutingModule
  ],
})
export class InstructorModule { }
