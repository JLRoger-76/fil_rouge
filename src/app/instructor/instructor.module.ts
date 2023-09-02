import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorAdminComponent } from './instructor-admin/instructor-admin.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';




@NgModule({
  declarations: [
   
  
    InstructorAdminComponent,
           InstructorEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InstructorModule { }
