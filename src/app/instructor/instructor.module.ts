import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorAdminComponent } from './instructor-admin/instructor-admin.component';
import { InstructorAdminEditComponent } from './instructor-admin-edit/instructor-admin-edit.component';



@NgModule({
  declarations: [
   
  
    InstructorAdminComponent,
           InstructorAdminEditComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class InstructorModule { }
