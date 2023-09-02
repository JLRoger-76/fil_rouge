import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillAdminComponent } from './skill-admin/skill-admin.component';
import { SkillEditComponent } from './skill-edit/skill-edit.component';



@NgModule({
  declarations: [
    SkillAdminComponent,
    SkillEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SkillModule { }
