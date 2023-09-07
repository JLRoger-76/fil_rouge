import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillAdminComponent } from './skill-admin/skill-admin.component';
import { SkillAdminEditComponent } from './skill-admin-edit/skill-admin-edit.component';


@NgModule({
  declarations: [
    SkillAdminComponent,
    SkillAdminEditComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class SkillModule { }
